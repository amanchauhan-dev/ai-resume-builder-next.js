import React from 'react'
import ResumeBuilder from './resume-builder'

async function page({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params

    return (
            <ResumeBuilder id={id} />
    )
}

export default page