import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const body = await req.json();

    if (body?.object !== 'user') {
        return new NextResponse('Invalid payload', { status: 400 });
    }

    const {
        id,
        email_addresses,
        first_name,
        last_name,
        username,
        image_url,
        primary_email_address_id
    } = body;

    const primaryEmail = email_addresses.find(
        (e: any) => e.id === primary_email_address_id
    )?.email_address;

    await prisma.user.upsert({
        where: { id },
        update: {},
        create: {
            id,
            email: primaryEmail,
            name: `${first_name ?? ''} ${last_name ?? ''}`.trim() || username || '',
            avatarURL: image_url,
        }
    });

    return NextResponse.json({ success: true });
}
