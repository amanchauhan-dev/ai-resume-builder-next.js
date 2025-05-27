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
import { Input } from "@/components/ui/input"
import { PersonalSection, personalSectionSchema } from "@/lib/validations"
import { ArrowRight, Calendar, LocationEdit, Mail, Phone, User2 } from "lucide-react"
import { useResume } from "@/hooks/use-resume"


function PersonalInfoForm() {
    const { resume, setResume, step, save, loading, setLoading } = useResume()
    const personalSection = resume.sections?.find(
        (e) => e.type === "personal" && e.id === step?.id
    ) as PersonalSection | undefined
    const form = useForm<PersonalSection>({
        resolver: zodResolver(personalSectionSchema),
        defaultValues: {
            id: personalSection?.id || "",
            title: personalSection?.title || "Personal",
            type: personalSection?.type || "personal",
            content: {
                description: personalSection?.content?.description || "",
                items: [
                    {
                        fullName: personalSection?.content?.items?.[0]?.fullName || "",
                        jobRole: personalSection?.content?.items?.[0]?.jobRole || "",
                        address: personalSection?.content?.items?.[0]?.address || "",
                        email: personalSection?.content?.items?.[0]?.email || "",
                        phone: personalSection?.content?.items?.[0]?.phone || "",
                        dateOfBirth: personalSection?.content?.items?.[0]?.dateOfBirth || "",
                        links: personalSection?.content?.items?.[0]?.links || [],
                        avatarURL: personalSection?.content?.items?.[0]?.avatarURL || "",
                    },
                ],
            },
        },
    });



    const onSubmit = (section: PersonalSection) => {
        setLoading(true)
        setResume((prev) => {
            return {
                ...prev,
                sections: prev.sections?.map((s) => {
                    if (s.type === "personal" && s.id === section.id) {
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
        save()
    }

    return (
        <Form {...form}>
            <form className="max-w-[600px] my-10 mx-auto px-4" onSubmit={form.handleSubmit(onSubmit)}>
                <h1 className="text-xl font-semibold text-center">Personal Information</h1>
                <p className="text-center text-sm text-muted-foreground">
                    This area will cover your personal information like Name, Email, Location, Image, and Age etc.
                </p>
                <div className="space-y-5 py-5">
                    <div className="space-y-0 grid sm:grid-cols-2 gap-x-4 md:gap-x-10">
                        <FormField
                            control={form.control}
                            name={`content.items.${0}.fullName`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Full Name
                                        <Button type="button" variant={'ghost'} size={'icon'}><User2 /></Button>
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex: John Doe" {...field} autoFocus />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`content.items.${0}.jobRole`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Job Role
                                        <Button type="button" variant={'ghost'} size={'icon'}><User2 /></Button>
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex: Engineer" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`content.items.${0}.dateOfBirth`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Date Of Birth
                                        <Button type="button" variant={'ghost'} size={'icon'}><Calendar /></Button>
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex: 13/2/2004"
                                            {...field}
                                            type="date"
                                            value={field.value?.slice(0, 10)}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`content.items.${0}.email`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email
                                        <Button type="button" variant={'ghost'} size={'icon'}><Mail /></Button>
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex: johndoe@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`content.items.${0}.phone`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number
                                        <Button type="button" variant={'ghost'} size={'icon'}><Phone /></Button>
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex: xxxxxxxxx" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name={`content.items.${0}.address`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address / Location
                                        <Button type="button" variant={'ghost'} size={'icon'}><LocationEdit /></Button>
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Ex: New Delhi, India" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    {/* links */}
                    <div className="">
                        <ShowLinks />
                        <h1 className="font-semibold">Add Links</h1>
                        <div className="grid grid-cols-[auto_60px] border-1 p-2 rounded">
                            <div className="grid grid-cols-3 gap-2">
                                <Input type="text" placeholder="SVG" />
                                <Input type="text" className="col-span-2" placeholder="Label" />
                                <Input className="col-span-3" placeholder="URL" type="text" />
                            </div>
                            <div className="mt-auto">
                                <Button type="button">Add</Button>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Button className="w-full" type="submit" disabled={loading}>
                            {loading ? "Saving..." : <>
                                SAVE & NEXT <ArrowRight />
                            </>}
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

export default PersonalInfoForm



const ShowLinks = () => {
    return (
        <div></div>
    )
}