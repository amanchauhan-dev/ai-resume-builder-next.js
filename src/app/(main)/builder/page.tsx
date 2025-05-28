import { Metadata } from 'next'
import React from 'react'
import ResumeList from './resume-list'

export const metadata: Metadata = {
    title: "Builder"
}
function page() {
    return (
        <div className='px-4 md:px-16 my-5'>
            <ResumeList />
        </div>
    )
}

export default page
