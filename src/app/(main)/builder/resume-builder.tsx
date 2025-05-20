import React, { Fragment } from 'react'
import { BuilderFooter, BuilderHeader } from './builder-components'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import PersonalInfoForm from './forms/personal-info-form'
import { cn } from '@/lib/utils'
import { formSteps } from './form-steps'



export default function ResumeBuilder() {
    // const [formStep, setFormStep] = useState('')
    return (
        <>
            <BuilderHeader />
            <BuilderContent />
            <BuilderFooter />
        </>
    )
}



export const BuilderContent = () => {
    return (
        <main className="relative grow">
            <ResizablePanelGroup
                direction="horizontal"
                className="absolute bottom-0 top-0 flex w-full"
            >
                <ResizablePanel defaultSize={400} className="border-r min-w-[400px] flex-auto">
                    <NavigationThroughForms />
                    {/* <GeneralResumeDetailForm /> */}
                    <PersonalInfoForm />
                </ResizablePanel>
                <ResizableHandle className="max-md:hidden" />
                <ResizablePanel className="max-md:hidden flex-auto bg-secondary py-5  min-w-[400px]" defaultSize={400}>
                    <div className="bg-white  border shadow-xl w-full max-w-96 h-full mx-auto relative">
                        <p className="absolute -top-[16px] left-0 text-secondary-foreground text-[10px]">My-Resume</p>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </main>
    )
}




const NavigationThroughForms = () => {
    const active = "General"
    return (
        <Breadcrumb className="p-2 mt-3 mx-auto w-fit">
            <BreadcrumbList className='flex justify-center items-center'>
                <BreadcrumbList>
                    <BreadcrumbItem className={cn("mx-auto cursor-pointer", {
                        "text-primary": "General" == active
                    })}>
                        General
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="" />
                </BreadcrumbList>
                {
                    formSteps.map(item => {
                        return (
                            <Fragment key={item.id}>
                                <BreadcrumbItem className={cn("cursor-pointer", {
                                    "text-primary": item.name == active
                                })}>
                                    {item.name}
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="last:hidden" />
                            </Fragment>
                        )
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    )
}