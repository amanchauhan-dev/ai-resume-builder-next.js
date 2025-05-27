"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { EducationSection, educationSectionSchema } from "@/lib/validations"
import { ArrowRight } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"




function EducationForm() {
    // 1. Define your form.
    const form = useForm<EducationSection>({
        resolver: zodResolver(educationSectionSchema),
        defaultValues: {
        }
    })


    return (
        <Form {...form}>
            <form className="max-w-[600px] my-10 mx-auto px-4">
                <h1 className="text-xl font-semibold text-center">Education Information</h1>
                <p className="text-center text-sm text-muted-foreground">
                    This area will cover your personal information like Name, Email, Location, Image, and Age etc.
                </p>
                <div className="space-y-5 py-5">
                    <div className="space-y-0 grid sm:grid-cols-2 gap-x-4 md:gap-x-10">
                    </div>
                    <div className="">
                        <ShowLinks />
                        <h1 className="font-semibold">Add Education</h1>
                        <div className="grid gap-2 md:grid-cols-[auto_60px] border-1 p-2 rounded">
                            <div className="grid grid-cols-2 gap-2">
                                <Input className="col-span-1" autoFocus placeholder="Institute" type="text" />
                                <Input className="col-span-1" placeholder="Location, Ex: New Delhi, India" type="text" />
                                <Input type="text" placeholder="Degree, Ex: BTech" />
                                <Input type="text" placeholder="Course, Ex: IT" />
                                <Textarea placeholder="Description" className="col-span-2" />
                                <Input type="text" placeholder="Start Year" />
                                <Input type="text" placeholder="End Year" />
                            </div>
                            <div className="mt-auto ml-auto">
                                <Button type="button">Add</Button>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Button type="button" className="w-full">
                            NEXT <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground">
                    You will be able to change these details anytime.
                </p>
            </form>
        </Form>
    )
}

export default EducationForm



const ShowLinks = () => {
    return (
        <div></div>
    )
}