"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {  GripVertical, Trash, } from "lucide-react"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction, useState } from "react"
import DNDWrapper from "@/components/dnd-wrapper"
import { generateUniqueUUID } from "@/lib/id-generator"
import { useResume } from "@/hooks/use-resume"
import { LanguageItem, languageItemSchema, LanguagesSection } from "@/lib/validations"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

function LanguagesForm() {
    const { save, resume, setResume, setLoading, step } = useResume()
    const ResumeSection = resume.sections?.find(
        (e) => e.type === "languages" && e.id === step?.id
    ) as LanguagesSection | undefined
    const [Languages, setLanguages] = useState<LanguageItem[]>(ResumeSection?.content?.items?.[0]?.languages || [])

    const onSave = () => {
        setLoading(true)
        setResume((prev) => {
            return {
                ...prev,
                sections: prev.sections?.map((s) => {
                    if (s.type === "languages" && s.id === ResumeSection?.id) {
                        return {
                            ...s,
                            content: {
                                ...s.content,
                                items: [
                                    {
                                        languages: Languages
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


    const deleteLanguages = (id: string) => {
        console.log(id);
        setLanguages((prev) => prev.filter(e => e.id !== id));
    }
    return (
        <div className="flex flex-col max-w-[600px] my-10 mx-auto">
            <h1 className="text-xl font-semibold text-center">Languages</h1>
            <p className="text-center text-sm text-muted-foreground">
                This area will cover your personal information like Name, Email, Location, Image, and Age etc.
            </p>
            <div className="mt-5 space-y-2">
                <DNDWrapper
                    items={Languages}
                    onChange={setLanguages}
                    getId={(item) => item.id}
                    renderItem={(item, _, dragHandleProps) => (
                        <LanguagesDisplay Dragger={
                            <>
                                <Button className="cursor-grab" size={'icon'} {...dragHandleProps.attributes}
                                    {...dragHandleProps.listeners}><GripVertical /></Button>
                            </>
                        } deleteLanguages={deleteLanguages} Languages={item} />
                    )}
                />

            </div>
            <AddForm onSave={onSave} Languages={Languages} setLanguages={setLanguages} />
        </div>
    )
}

export default LanguagesForm

const AddForm = ({ setLanguages, onSave }: { Languages: LanguageItem[]; setLanguages: Dispatch<SetStateAction<LanguageItem[]>>, onSave: () => void }) => {
    const { loading } = useResume()
    const form = useForm<LanguageItem>({
        resolver: zodResolver(languageItemSchema),
        defaultValues: {
            id: '',
            name: '',
            proficiency: 'none'
        }
    })

    const onSubmit = (values: LanguageItem) => {
        setLanguages((prev) => ([...prev, { ...values, id: generateUniqueUUID() }]))
        form.reset()
    }
    return (
        <Form {...form}>
            <form className="space-y-5">
                <div className="space-y-0 grid sm:grid-cols-2 gap-x-4 md:gap-x-10">
                </div>
                <div className="">
                    <h1 className="font-semibold mb-1">Add Languages</h1>
                    <div className="grid gap-2 md:grid-cols-[auto_60px] border-1 p-2 rounded">
                        <div className="space-y-2">
                            <div className="grid grid-cols-2 gap-2">
                                <FormField
                                    control={form.control}
                                    name={'name'}
                                    render={({ field }) => (
                                        <FormItem className="col-span-1">
                                            <FormLabel className="text-muted-foreground">
                                                Name
                                                <Button type="button" variant={'ghost'} size={'icon'}></Button>
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="Language" {...field} />
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
                                                    <SelectItem value="basic">Basic</SelectItem>
                                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                                    <SelectItem value="fluent">Fluent</SelectItem>
                                                    <SelectItem value="native">Native</SelectItem>
                                                </SelectContent>
                                            </Select>
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

interface LanguagesDisplayProps {
    Languages: LanguageItem;
    deleteLanguages: (id: string) => void;
    Dragger: React.ReactNode;
}

const LanguagesDisplay: React.FC<LanguagesDisplayProps> = ({ Languages, deleteLanguages, Dragger }) => {
    const {
        id,
        name,
        proficiency
    } = Languages;

    return (
        <div className="w-full border rounded-md max-w-xl mx-auto shadow-md relative bg-background">
            <div className="absolute right-1 top-1 flex gap-2">
                {Dragger}
                <Button onClick={() => deleteLanguages(id)} size={'icon'} className="bg-red-600 hover:bg-red-500 z-50"><Trash /></Button>
            </div>
            <div className=" p-2 px-3 space-y-1">
                <div>
                    <div className="text-md font-semibold flex gap-2 items-center">
                        {name}
                    </div>
                    {proficiency != "none" && <p className={"text-muted-foreground text-sm"}>{proficiency.charAt(0).toLocaleUpperCase() + proficiency.substring(1)}</p>}
                </div>
            </div>
        </div>
    );
};
