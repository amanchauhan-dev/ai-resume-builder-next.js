'use client'
import { useResume } from '@/hooks/use-resume'
import { BuilderFooter, BuilderHeader } from '../builder-components'
import BuilderContent from '../builder-content'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ProgressBarLink } from '@/providers/progress-bar-provider'
import { Skeleton } from '@/components/ui/skeleton'

export default function ResumeBuilder({ id }: { id: string }) {
    const { setResumeId, resume, loadingResume } = useResume()
    useEffect(() => {
        setResumeId(id)
        console.log(id);

    })
    if (loadingResume == true) {
        return (
            <div className='px-4 md:px-16 my-5 flex flex-col items-center'>
                <Skeleton className='h-96 w-full' />
            </div>
        )
    }
    if ((!resume.id || resume.id == '') && loadingResume == false) {
        return (
            <div className='px-4 md:px-16 my-5 flex flex-col items-center'>
                <h1 className='text-lg font-semibold'>No Resume Found</h1>
                <Button variant={'link'}>
                    <ProgressBarLink href={'/builder'}>Go To Builder</ProgressBarLink>
                </Button>
            </div>
        )
    }
    return (
        <>
            <BuilderHeader />
            <BuilderContent />
            <BuilderFooter />
        </>
    )
}


