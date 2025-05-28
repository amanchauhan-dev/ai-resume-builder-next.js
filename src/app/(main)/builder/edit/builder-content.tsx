'use client'
import React, { Fragment, useCallback } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { cn } from '@/lib/utils'
import { useResume } from '@/hooks/use-resume'
import { FormRegister } from './form-register'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'

function BuilderContent() {
    const { step, resume } = useResume()

    const FormComponent = useCallback(() => FormRegister.find(
        (item) => item.type === step.type,
    )?.component, [step])()
    return (
        <main className="relative grow">
            <div
                className="absolute bottom-0 top-0 flex w-full"
            >
                <div className="border-r min-w-[400px] flex-auto">
                    <ScrollArea className='h-[100%] px-2 sm:px-8 md:px-12 pb-5'>
                        <NavigationThroughForms />
                        <div className='px-2'>
                            {FormComponent && <FormComponent />}
                        </div>
                    </ScrollArea>
                </div>
                <div className="max-lg:hidden flex-auto bg-secondary p-5 max-w-[500px]">
                    <div className="bg-white text-[10px] text-black border shadow-xl w-full  h-full mx-auto relative overflow-auto">
                        <p className="absolute -top-[16px] left-0 text-secondary-foreground text-[10px]">My-Resume</p>
                        <pre className='text-wrap'>
                            {JSON.stringify(resume, null, 2)}
                        </pre>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BuilderContent



const NavigationThroughForms = () => {
    const { step, sections, handleStepChange } = useResume()
    return (
        <Breadcrumb className="p-2 mt-3 mx-auto w-fit">
            <BreadcrumbList className='flex justify-center items-center'>
                <BreadcrumbList>
                    <BreadcrumbItem onClick={() => handleStepChange({
                        id: '', type: ""
                    })} className={cn("mx-auto cursor-pointer", {
                        "text-primary": "" == step.id
                    })}>
                        General
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="" />
                </BreadcrumbList>
                {
                    sections.map((item) => {
                        return (
                            <Fragment key={item.id}>
                                <BreadcrumbItem className={cn("cursor-pointer", {
                                    "text-primary": item.id == step.id
                                })} onClick={() => handleStepChange({
                                    id: item?.id || '', type: item?.type || ''
                                })}>
                                    {item.title}
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="" />
                            </Fragment>
                        )
                    })
                }
                <BreadcrumbItem className='hover:text-primary'>
                    <Button size={'icon'}><Plus /></Button>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}