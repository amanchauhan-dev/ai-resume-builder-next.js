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
import ResumeList from './resume-list'

export default function ResumeBuilder() {
    const [createLoader, setCreateLoader] = useState(false);
    const { userId } = useAuth()
    const params = useSearchParams();
    const resumeId = params.get('resumeId');
    const searchParams = useSearchParams()
    if (resumeId === null || resumeId === undefined || resumeId === '') {
        const createNewResume = async () => {
            setCreateLoader(true);
            const res = await CreateNewResume({ userId: userId || '' });
            if (res.data?.id) {
                const params = new URLSearchParams(searchParams)
                params.set('resumeId', res.data.id);
                window.history.replaceState(null, '', `?${params.toString()}`);
            }
            setCreateLoader(false);
        }
        return (
            <div className="flex flex-col gap-5  h-full mt-10 px-4 md:px-16">
                <Button onClick={createNewResume} className='w-fit mx-auto' disabled={createLoader}>
                    {createLoader ? <Loading /> :
                        <>
                            <Plus /> Create New Resume
                        </>
                    }
                </Button>
                <div>
                    <ResumeList />
                </div>
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


