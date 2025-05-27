'use client'
import { useSearchParams } from 'next/navigation'
import { BuilderFooter, BuilderHeader } from './builder-components'
import BuilderContent from './builder-content'
import { ResumeProvider } from '@/providers/resume-provider'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { useState } from 'react'
import { CreateNewResume } from './actions'
import Loading from '@/components/loader'
import { useAuth } from '@clerk/nextjs'

export default function ResumeBuilder() {
    const [createLoader, setCreateLoader] = useState(false);
    const { userId } = useAuth()
    const params = useSearchParams();
    const resumeId = params.get('resumeId');
    if (resumeId === null || resumeId === undefined || resumeId === '') {
        const createNewResume = async () => {
            setCreateLoader(true);
            const response = await CreateNewResume({ userId: userId || '' });
            console.log("🚀 New resume creation response:", response);
            setCreateLoader(false);
        }
        return (
            <div className="flex flex-col items-center justify-center h-full mt-10">
                <Button onClick={createNewResume} disabled={createLoader}>
                    {createLoader ? <Loading /> :
                        <>
                            <Plus /> Create New Resume
                        </>
                    }
                </Button>
            </div>
        )
    }
    else
        return (
            <ResumeProvider>
                <BuilderHeader />
                <BuilderContent />
                <BuilderFooter />
            </ResumeProvider>
        )
}


