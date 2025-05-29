import React from 'react'
import Preview from '../preview'

async function page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    return (
            <Preview id={id} />
    )
}

export default page