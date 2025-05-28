"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {  GripVertical, Trash, } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Dispatch, SetStateAction, useState } from "react"
import DNDWrapper from "@/components/dnd-wrapper"
import { generateUniqueUUID } from "@/lib/id-generator"
import { format, parse } from "date-fns";
import { useResume } from "@/hooks/use-resume"
import { EducationItem, educationItemSchema, EducationSection } from "@/lib/validations"

function EducationForm() {
    const { save, resume, setResume, setLoading, step } = useResume()
    const ResumeSection = resume.sections?.find(
        (e) => e.type === "education" && e.id === step?.id
    ) as EducationSection | undefined
    const [Education, setEducation] = useState<EducationItem[]>(ResumeSection?.content?.items?.[0]?.educations || [])

    const onSave = () => {
        setLoading(true)
        setResume((prev) => {
            return {
                ...prev,
                sections: prev.sections?.map((s) => {
                    if (s.type === "education" && s.id === ResumeSection?.id) {
                        return {
                            ...s,
                            content: {
                                ...s.content,
                                items: [
                                    {
                                        educations: Education
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


    const deleteEducation = (id: string) => {
        console.log(id);
        setEducation((prev) => prev.filter(e => e.id !== id));
    }
    return (
        <div className="flex flex-col max-w-[600px] my-10 mx-auto">
            <h1 className="text-xl font-semibold text-center">Education</h1>
            <p className="text-center text-sm text-muted-foreground">
                This area will cover your personal information like Name, Email, Location, Image, and Age etc.
            </p>
            <div className="mt-5 space-y-2">
                <DNDWrapper
                    items={Education}
                    onChange={setEducation}
                    getId={(item) => item.id}
                    renderItem={(item, _, dragHandleProps) => (
                        <EducationDisplay Dragger={
                            <>
                                <Button className="cursor-grab" size={'icon'} {...dragHandleProps.attributes}
                                    {...dragHandleProps.listeners}><GripVertical /></Button>
                            </>
                        } deleteEducation={deleteEducation} Education={item} />
                    )}
                />

            </div>
            <AddForm onSave={onSave} Educations={Education} setEducations={setEducation} />
        </div>
    )
}

export default EducationForm

const AddForm = ({ setEducations, onSave }: { Educations: EducationItem[]; setEducations: Dispatch<SetStateAction<EducationItem[]>>, onSave: () => void }) => {
    const { loading } = useResume()
    const form = useForm<EducationItem>({
        resolver: zodResolver(educationItemSchema),
        defaultValues: {
            id: '',
            institution: "",
            endYear: '',
            startYear: "",
            location: "",
            degree: "",
            description: "",
            fieldOfStudy: ""
        }
    })

    const onSubmit = (values: EducationItem) => {
        setEducations((prev) => ([...prev, { ...values, id: generateUniqueUUID() }]))
        form.reset()
    }
    return (
        <Form {...form}>
            <form className="space-y-5">
                <div className="space-y-0 grid sm:grid-cols-2 gap-x-4 md:gap-x-10">
                </div>
                <div className="">
                    <h1 className="font-semibold mb-1">Add Education</h1>
                    <div className="grid gap-2 md:grid-cols-[auto_60px] border-1 p-2 rounded">
                        <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                                <FormField
                                    control={form.control}
                                    name={"institution"}
                                    render={({ field }) => (
                                        <FormItem className="col-span-2">
                                            <FormLabel className="text-muted-foreground">
                                                Institution Name
                                                <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="Ex: XYZ Collage" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"location"}
                                    render={({ field }) => (
                                        <FormItem className="col-span-2">
                                            <FormLabel className="text-muted-foreground">
                                                Location
                                                <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="Ex: New Delhi, India" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"degree"}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-muted-foreground">
                                                Degree
                                                <Button type="button" variant={'ghost'} size={'icon'}></Button>
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
                                    name={'fieldOfStudy'}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-muted-foreground">
                                                Field Of Study
                                                <Button type="button" variant={'ghost'} size={'icon'}></Button>
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
                                    name={"startYear"}
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormLabel className="text-muted-foreground">
                                                Start Date
                                                <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                            </FormLabel>
                                            <FormControl>
                                                <Input type="date" {...field} value={field.value?.slice(0, 10)} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"endYear"}
                                    render={({ field }) => (
                                        <FormItem >
                                            <FormLabel className="text-muted-foreground">
                                                End Date
                                                <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                            </FormLabel>
                                            <FormControl>
                                                <Input type="date" {...field} value={field.value?.slice(0, 10)} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"description"}
                                    render={({ field }) => (
                                        <FormItem className="col-span-2">
                                            <FormLabel className="text-muted-foreground">
                                                Description
                                                <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                            </FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Description" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <div className="mt-auto ml-auto">
                            <Button type="button" onClick={form.handleSubmit(onSubmit)}>Add</Button>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Button type="button" onClick={onSave} disabled={loading} className="w-full">
                        {loading ? "Saving..." : <>
                            SAVE
                        </>}
                    </Button>
                </div>
            </form>
            <p className="text-sm text-muted-foreground">
                You will be able to change these details anytime.
            </p>
        </Form>

    )
}

interface EducationDisplayProps {
    Education: EducationItem;
    deleteEducation: (id: string) => void;
    Dragger: React.ReactNode;
}

const EducationDisplay: React.FC<EducationDisplayProps> = ({ Education, deleteEducation, Dragger }) => {
    const {
        id,
        institution,
        fieldOfStudy,
        degree,
        description,
        endYear, startYear,
        location
    } = Education;

    return (
        <div className="w-full border rounded-md max-w-xl mx-auto shadow-md relative bg-background">
            <div className="absolute right-1 top-1 flex gap-2">
                {Dragger}
                <Button onClick={() => deleteEducation(id)} size={'icon'} className="bg-red-600 hover:bg-red-500 z-50"><Trash /></Button>
            </div>
            <div className=" p-2 px-3 space-y-1">
                <div>
                    <div className="text-md font-semibold flex gap-2 items-center">
                        {degree} <span className="text-muted-foreground">|</span> {fieldOfStudy} <span className="text-muted-foreground">|</span>
                        <div className="text-sm font-normal text-muted-foreground">
                            <p>
                                {startYear && format(parse(startYear, "yyyy-M-d", new Date()), "yyyy")} -{" "}
                                {endYear && format(parse(endYear, "yyyy-M-d", new Date()), "yyyy") || "Present"}
                            </p>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{institution}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                    {location && (
                        <p>
                            {location}
                        </p>
                    )}
                </div>
                {description && <p className="text-sm">{description}</p>}
            </div>
        </div>
    );
};
