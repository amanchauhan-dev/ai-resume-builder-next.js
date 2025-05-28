import { Skeleton } from '@/components/ui/skeleton'
import { ResumeProvider } from '@/providers/resume-provider'
import React, { Suspense } from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<Skeleton className="h-96 w-full mx-4 md:mx-16 my-4" />}>
            <ResumeProvider>
                {children}
            </ResumeProvider>
        </Suspense>
    )
}

export default layout