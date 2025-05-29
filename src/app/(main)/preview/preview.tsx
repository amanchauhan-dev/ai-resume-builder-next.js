'use client'

import { Resume } from "@/lib/validations"
import { useEffect, useState } from "react"
import { GetResumeById } from "../builder/actions"
import { Skeleton } from "@/components/ui/skeleton"
import ResumePreview from "@/components/ResumePreview"

function Preview({ id }: { id: string }) {
    const [resume, setResume] = useState<Resume>()
    const [loading, setLoading] = useState<boolean>(true)
    useEffect(() => {
        GetResumeById({ resumeId: id }).then(res => {
            setResume(res.data)
        }).finally(() => {
            setLoading(false)
        })
    }, [id])


    if (loading) {
        return (
            <div className=" px-4 md:px-16 my-5">
                <Skeleton className="aspect-[210/297] max-w-[600px] mx-auto" />
            </div>
        )
    }
    if (!resume) {
        return <>Resume not found</>
    }
    return (
        <div className="max-w-[600px] px-2 py-5 mx-auto">
            <ResumePreview resumeData={resume} />
        </div>
    )
}

export default Preview