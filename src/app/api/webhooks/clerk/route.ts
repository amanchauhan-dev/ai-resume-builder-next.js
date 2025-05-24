// app/api/webhooks/clerk/route.ts
import { Webhook, WebhookRequiredHeaders } from 'svix';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
    const secret = process.env.CLERK_WEBHOOK_SECRET!;
    const payload = await req.text();
    const headers: WebhookRequiredHeaders = {
        "svix-id": req.headers.get('svix-id') || "",
        "svix-timestamp": req.headers.get('svix-timestamp') || "",
        "svix-signature": req.headers.get('svix-signature') || '',
    };
    const wh = new Webhook(secret);
    let event;
    try {
        event = wh.verify(payload, headers);
    } catch (err) {
        console.error('Invalid signature:', err);
        return new Response('Invalid signature', { status: 400 });
    }
    const { type, data } = event as any;
    try {
        if (type === 'user.created') {
            await prisma.user.create({
                data: {
                    id: data.id,
                    email: data.email_addresses[0]?.email_address,
                    name: data.first_name + " " + data.last_name,
                    avatarURL: data.profile_image_url
                },
            });
        } else if (type === 'user.updated') {
            await prisma.user.update({
                where: { id: data.id },
                data: {
                    email: data.email_addresses[0]?.email_address,
                    name: data.first_name + " " + data.last_name,
                    avatarURL: data.profile_image_url,
                },
            });
        }
        return new Response('OK', { status: 200 });
    } catch (err: any) {
        return NextResponse.json({ message: 'Server error', err }, { status: 500 });
    }
}
