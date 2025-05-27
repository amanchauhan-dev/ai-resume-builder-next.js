"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SkillsSection, skillsSectionSchema } from "@/lib/validations"
import { ArrowRight } from "lucide-react"




function LanguagesForm() {
    // 1. Define your form.
    const form = useForm<SkillsSection>({
        resolver: zodResolver(skillsSectionSchema),
        defaultValues: {}
    })


    return (
        <form className="max-w-[600px] my-10 mx-auto px-4">
            <h1 className="text-xl font-semibold text-center">Languages</h1>
            <p className="text-center text-sm text-muted-foreground">
                List the languages you speak and your proficiency level in each.
            </p>
            <div className="space-y-5 py-5">
                <div className="space-y-0 grid sm:grid-cols-2 gap-x-4 md:gap-x-10">
                </div>
                <div className="">
                    <ShowLinks />
                    <h1 className="font-semibold">Add Language</h1>
                    <div className="grid gap-2 md:grid-cols-[auto_60px] border-1 p-2 rounded">
                        <div className="grid grid-cols-2 gap-2">
                            <Input className="col-span-1" placeholder="Language" autoFocus type="text" />
                            <Input className="col-span-1" placeholder="Level" type="text" />
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
    )
}

export default LanguagesForm



const ShowLinks = () => {
    return (
        <div></div>
    )
}