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
import { useSearchParams } from 'next/navigation'
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
                    <NavigationThroughForms />
                    <ScrollArea className='h-[100%] pb-5'>
                        {FormComponent && <FormComponent />}
                    </ScrollArea>
                </div>
                <div className="max-lg:hidden flex-auto bg-secondary p-5 min-w-[600px]">
                    <div className="bg-white text-[10px] text-black border shadow-xl w-full  h-full mx-auto relative overflow-auto">
                        <p className="absolute -top-[16px] left-0 text-secondary-foreground text-[10px]">My-Resume</p>
                        <pre>
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
    const params = useSearchParams()
    const { step, sections, setStep } = useResume()
    const handleStepChange = (id: string, type: string) => {
        setStep({ id: id, type: type })
        const newSearchParams = new URLSearchParams(params)
        newSearchParams.set('step-id', id)
        newSearchParams.set('step-type', type)
        window.history.pushState(null, '', `?${newSearchParams.toString()}`)
    }
    return (
        <Breadcrumb className="p-2 mt-3 mx-auto w-fit">
            <BreadcrumbList className='flex justify-center items-center'>
                <BreadcrumbList>
                    <BreadcrumbItem onClick={() => setStep({ id: "", type: "" })} className={cn("mx-auto cursor-pointer", {
                        "text-primary": "" == step.id
                    })}>
                        General
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="" />
                </BreadcrumbList>
                {
                    sections.map(item => {
                        return (
                            <Fragment key={item.id}>
                                <BreadcrumbItem className={cn("cursor-pointer", {
                                    "text-primary": item.id == step.id
                                })} onClick={() => handleStepChange(item.id || '', item.type || '')}>
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