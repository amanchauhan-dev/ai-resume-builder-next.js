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
import { useResume } from "@/hooks/use-resume"
import { SkillItem, skillItemSchema, SkillsSection } from "@/lib/validations"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function SkillsForm() {
    const { save, resume, setResume, setLoading, step } = useResume()
    const ResumeSection = resume.sections?.find(
        (e) => e.type === "skills" && e.id === step?.id
    ) as SkillsSection | undefined
    const [Skills, setSkills] = useState<SkillItem[]>(ResumeSection?.content?.items?.[0]?.skills || [])

    const onSave = () => {
        setLoading(true)
        setResume((prev) => {
            return {
                ...prev,
                sections: prev.sections?.map((s) => {
                    if (s.type === "skills" && s.id === ResumeSection?.id) {
                        return {
                            ...s,
                            content: {
                                ...s.content,
                                items: [
                                    {
                                        skills: Skills
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


    const deleteSkills = (id: string) => {
        console.log(id);
        setSkills((prev) => prev.filter(e => e.id !== id));
    }
    return (
        <div className="flex flex-col max-w-[600px] my-10 mx-auto">
            <h1 className="text-xl font-semibold text-center">Skills</h1>
            <p className="text-center text-sm text-muted-foreground">
                This area will cover your personal information like Name, Email, Location, Image, and Age etc.
            </p>
            <div className="mt-5 space-y-2">
                <DNDWrapper
                    items={Skills}
                    onChange={setSkills}
                    getId={(item) => item.id}
                    renderItem={(item, _, dragHandleProps) => (
                        <SkillsDisplay Dragger={
                            <>
                                <Button className="cursor-grab" size={'icon'} {...dragHandleProps.attributes}
                                    {...dragHandleProps.listeners}><GripVertical /></Button>
                            </>
                        } deleteSkills={deleteSkills} Skills={item} />
                    )}
                />

            </div>
            <AddForm onSave={onSave} Skills={Skills} setSkills={setSkills} />
        </div>
    )
}

export default SkillsForm

const AddForm = ({ setSkills, onSave }: { Skills: SkillItem[]; setSkills: Dispatch<SetStateAction<SkillItem[]>>, onSave: () => void }) => {
    const { loading } = useResume()
    const form = useForm<SkillItem>({
        resolver: zodResolver(skillItemSchema),
        defaultValues: {
            id: '',
            name: '',
            description: "",
            proficiency: 'none',
        }
    })

    const onSubmit = (values: SkillItem) => {
        setSkills((prev) => ([...prev, { ...values, id: generateUniqueUUID() }]))
        form.reset()
    }
    return (
        <Form {...form}>
            <form className="space-y-5">
                <div className="space-y-0 grid sm:grid-cols-2 gap-x-4 md:gap-x-10">
                </div>
                <div className="">
                    <h1 className="font-semibold mb-1">Add Skills</h1>
                    <div className="grid gap-2 md:grid-cols-[auto_60px] border-1 p-2 rounded">
                        <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                                <FormField
                                    control={form.control}
                                    name={'name'}
                                    render={({ field }) => (
                                        <FormItem className="col-span-1">
                                            <FormLabel className="text-muted-foreground">
                                                Institution Name
                                                <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="skill" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='proficiency'
                                    render={({ field }) => (
                                        <FormItem className="col-span-1 mt-auto">
                                            <FormLabel className="text-muted-foreground">Level</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl className="w-full">
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a level" className="text-muted-foreground" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="w-full">
                                                    <SelectItem value="none" className="!text-muted-foreground">None</SelectItem>
                                                    <SelectItem value="beginner">Beginner</SelectItem>
                                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                                    <SelectItem value="advanced">Advanced</SelectItem>
                                                    <SelectItem value="expert">Expert</SelectItem>
                                                </SelectContent>
                                            </Select>
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

interface SkillsDisplayProps {
    Skills: SkillItem;
    deleteSkills: (id: string) => void;
    Dragger: React.ReactNode;
}

const SkillsDisplay: React.FC<SkillsDisplayProps> = ({ Skills, deleteSkills, Dragger }) => {
    const {
        id,
        name,
        description,
        proficiency
    } = Skills;

    return (
        <div className="w-full border rounded-md max-w-xl mx-auto shadow-md relative bg-background">
            <div className="absolute right-1 top-1 flex gap-2">
                {Dragger}
                <Button onClick={() => deleteSkills(id)} size={'icon'} className="bg-red-600 hover:bg-red-500 z-50"><Trash /></Button>
            </div>
            <div className=" p-2 px-3 space-y-1">
                <div>
                    <div className="text-md font-semibold flex gap-2 items-center">
                        {name}
                    </div>
                    {proficiency != "none" && <p className={"text-muted-foreground text-sm"}>{proficiency.charAt(0).toLocaleUpperCase() + proficiency.substring(1)}</p>}
                </div>
                <div className="text-sm text-muted-foreground">
                    {location && (
                        <p>
                            {description}
                        </p>
                    )}
                </div>
                {description && <p className="text-sm">{description}</p>}
            </div>
        </div>
    );
};
