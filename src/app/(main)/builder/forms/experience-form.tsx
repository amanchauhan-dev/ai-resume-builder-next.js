"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {  GripVertical, Mail, Phone, Trash, User, Workflow } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { ExperienceItem, experienceItemSchema, ExperienceSection } from "@/lib/validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Dispatch, SetStateAction, useState } from "react"
import DNDWrapper from "@/components/dnd-wrapper"
import { generateUniqueUUID } from "@/lib/id-generator"
import { format, parse } from "date-fns";
import { useResume } from "@/hooks/use-resume"

function ExperienceForm() {
    const { save, resume, setResume, setLoading, step } = useResume()
    const ResumeSection = resume.sections?.find(
        (e) => e.type === "experience" && e.id === step?.id
    ) as ExperienceSection | undefined
    const [Experience, setExperience] = useState<ExperienceItem[]>(ResumeSection?.content?.items?.[0]?.experiences || [])

    const onSave = () => {
        setLoading(true)
        setResume((prev) => {
            return {
                ...prev,
                sections: prev.sections?.map((s) => {
                    if (s.type === "experience" && s.id === ResumeSection?.id) {
                        return {
                            ...s,
                            content: {
                                ...s.content,
                                items: [
                                    {
                                        experiences: Experience
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


    const deleteExperience = (id: string) => {
        console.log(id);
        setExperience((prev) => prev.filter(e => e.id !== id));
    }
    return (
        <div className="flex flex-col max-w-[600px] my-10 mx-auto">
            <h1 className="text-xl font-semibold text-center">Work Experience</h1>
            <p className="text-center text-sm text-muted-foreground">
                This area will cover your personal information like Name, Email, Location, Image, and Age etc.
            </p>
            <div className="mt-5 space-y-2">
                <DNDWrapper
                    items={Experience}
                    onChange={setExperience}
                    getId={(item) => item.id}
                    renderItem={(item, _, dragHandleProps) => (
                        <ExperienceDisplay Dragger={
                            <>
                                <Button className="cursor-grab" size={'icon'} {...dragHandleProps.attributes}
                                    {...dragHandleProps.listeners}><GripVertical /></Button>
                            </>
                        } deleteExperience={deleteExperience} experience={item} />
                    )}
                />

            </div>
            <AddForm onSave={onSave} experiences={Experience} setExperiences={setExperience} />
        </div>
    )
}

export default ExperienceForm

const AddForm = ({ setExperiences, onSave }: { experiences: ExperienceItem[]; setExperiences: Dispatch<SetStateAction<ExperienceItem[]>>, onSave: () => void }) => {
    const { loading } = useResume()
    const form = useForm<ExperienceItem>({
        resolver: zodResolver(experienceItemSchema),
        defaultValues: {
            id: '',
            company: '',
            position: '',
            location: '',
            startDate: '',
            endDate: '',
            description: '',
            reference: {
                name: '',
                phone: '',
                position: '',
                email: '',
            }
        }
    })

    const onSubmit = (values: ExperienceItem) => {
        setExperiences((prev) => ([...prev, { ...values, id: generateUniqueUUID() }]))
        form.reset()
    }
    return (
        <Form {...form}>
            <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-0 grid sm:grid-cols-2 gap-x-4 md:gap-x-10">
                </div>
                <div className="">
                    <h1 className="font-semibold mb-1">Add Experience</h1>
                    <div className="grid gap-2 md:grid-cols-[auto_60px] border-1 p-2 rounded">
                        <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                                <FormField
                                    control={form.control}
                                    name={"company"}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-muted-foreground">
                                                Company Name
                                                <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="Ex: XYS PVT. LTD" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name={"position"}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-muted-foreground">
                                                Position
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
                                    name={"startDate"}
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
                                    name={"endDate"}
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

                            </div>
                            <div className="">
                                <h1 className="mb-2">Reference</h1>
                                <div className="grid grid-cols-2 gap-2">
                                    <FormField
                                        control={form.control}
                                        name={"reference.name"}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-muted-foreground">
                                                    Name
                                                    <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: Tushar Behera" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name={"reference.position"}
                                        render={({ field }) => (
                                            <FormItem >
                                                <FormLabel className="text-muted-foreground">
                                                    Position
                                                    <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: HR" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name={"reference.phone"}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-muted-foreground">
                                                    Phone Number
                                                    <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: 91xxxxxxxx" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name={"reference.email"}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-muted-foreground">
                                                    Email
                                                    <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ex: tushar@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="mt-auto ml-auto">
                            <Button type="submit">Add</Button>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <Button type="button" onClick={onSave} className="w-full">
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

interface ExperienceDisplayProps {
    experience: ExperienceItem;
    deleteExperience: (id: string) => void;
    Dragger: React.ReactNode;
}

const ExperienceDisplay: React.FC<ExperienceDisplayProps> = ({ experience, deleteExperience, Dragger }) => {
    const {
        id,
        company,

        position,
        startDate,
        endDate,
        location,
        description,
        reference,
    } = experience;

    return (
        <div className="w-full border rounded-md max-w-xl mx-auto shadow-md relative bg-background">
            <div className="absolute right-1 top-1 flex gap-2">
                {Dragger}
                <Button onClick={() => deleteExperience(id)} size={'icon'} className="bg-red-600 hover:bg-red-500 z-50"><Trash /></Button>
            </div>
            <div className=" p-2 px-3 space-y-1">
                <div>
                    <div className="text-md font-semibold flex gap-2 items-center">
                        {position} |
                        <div className="text-sm font-normal text-muted-foreground">
                            <p>
                                {format(parse(startDate, "yyyy-M-d", new Date()), "MMMM d, yyyy")} -{" "}
                                {endDate && format(parse(endDate, "yyyy-M-d", new Date()), "MMMM d, yyyy") || "Present"}
                            </p>
                        </div>
                    </div>
                    <p className="text-muted-foreground text-sm">{company}</p>
                </div>
                <div className="text-sm text-muted-foreground">
                    {location && (
                        <p>
                            {location}
                        </p>
                    )}
                </div>

                {description && <p className="text-sm">{description}</p>}

                {reference && (
                    <>
                        <Separator className="my-2" />
                        <p className="font-medium">Reference</p>
                        <div className="text-sm flex flex-wrap gap-2 items-center">
                            {reference.name && <p className="flex gap-1 items-center"><User size={14} /> {reference.name}</p>}|
                            {reference.position && <p className="flex gap-1 items-center"><Workflow size={14} /> {reference.position}</p>}|
                            {reference.phone && <p className="flex gap-1 items-center"><Phone size={14} /> {reference.phone}</p>}|
                            {reference.email && <p className="flex gap-1 items-center"><Mail size={14} /> {reference.email}</p>}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
