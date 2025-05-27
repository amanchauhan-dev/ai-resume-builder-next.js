"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { SummarySection, summarySectionSchema } from "@/lib/validations"
import { Textarea } from "@/components/ui/textarea"
import { useResume } from "@/hooks/use-resume"

function SummaryForm() {
    const { resume, setResume, step } = useResume()
    const ResumeSection = resume.sections?.find(
        (e) => e.type === "summary" && e.id === step?.id
    ) as SummarySection | undefined
    
    // 1. Define your form.
    const form = useForm<SummarySection>({
        resolver: zodResolver(summarySectionSchema),
        defaultValues: {
            id: ResumeSection?.id || "",
            title: ResumeSection?.title || "Professional Summary",
            type: ResumeSection?.type || "summary",
            content: {
                description: ResumeSection?.content?.description || "",
                items: [
                    {
                        summary: ResumeSection?.content?.items?.[0]?.summary || "",
                    },
                ],
            },
        }
    })


    const onSubmit = (section: SummarySection) => {
        
        setResume((prev) => {
            return {
                ...prev,
                sections: prev.sections?.map((s) => {
                    if (s.type === "summary" && s.id === section.id) {
                        return {
                            ...s,
                            ...section,
                            content: {
                                ...s.content,
                                items: [
                                    {
                                        ...s.content?.items?.[0],
                                        ...section.content?.items?.[0],
                                    },
                                ],
                            },
                        }
                    }
                    return s
                }),
            }
        })

    }

    return (
        <Form {...form}>
            <form className="max-w-[600px] my-10 mx-auto px-4" onSubmit={(form.handleSubmit(onSubmit))}>
                <h1 className="text-xl font-semibold text-center">Professional Summary</h1>
                <p className="text-center text-sm text-muted-foreground">
                    Write a brief summary of your professional background and career goals.
                </p>
                <div className="space-y-5 py-5">
                    <div className="space-y-0 ">
                        <FormField
                            control={form.control}
                            name={`content.items.${0}.summary`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Professional Summary
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Ex: A motivated developer with 4 years of working experience..." {...field} autoFocus />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                        <Button className="w-full">
                            SAVE
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

export default SummaryForm
