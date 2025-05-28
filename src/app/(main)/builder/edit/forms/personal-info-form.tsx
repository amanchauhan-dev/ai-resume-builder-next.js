"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import DNDWrapper from "@/components/dnd-wrapper"
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
import { Calendar, GripVertical, LocationEdit, Mail, Phone, Trash, User2 } from "lucide-react"
import { useResume } from "@/hooks/use-resume"
import SVGPicker from "@/components/svg-picker"
import { useState } from "react"
import SVGIcon from "@/components/svg-icon"
import { SVG } from "@/lib/svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
type LinksType = {
    icons?: number;
    label?: string;
    url?: string;
}

function PersonalInfoForm() {
    const { resume, setResume, step, save, loading, setLoading } = useResume()
    const personalSection = resume.sections?.find(
        (e) => e.type === "personal" && e.id === step?.id
    ) as PersonalSection | undefined
    const [links, setLinks] = useState<LinksType[]>(personalSection?.content?.items?.[0]?.links || []);

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
                                        links: links,
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

    const handleRemoveLink = (index: number) => {
        setLinks((prev) => prev.filter((_, i) => i !== index));
    }
    return (
        <Form {...form}>
            <form className="max-w-[600px] my-10 mx-auto" onSubmit={form.handleSubmit(onSubmit)}>
                <h1 className="text-xl font-semibold text-center">Personal Information</h1>
                <p className="text-center text-sm text-muted-foreground">
                    This area will cover your personal information like Name, Email, Location, Image, and Age etc.
                </p>
                <div className="space-y-5 py-5">
                    <div>
                        <Avatar className="w-24 h-24 md:w-40 md:h-40 mx-auto">
                            <AvatarImage src={form.getValues(`content.items.${0}.avatarURL`) || ''} alt="Profile" />
                            <AvatarFallback>{form.getValues(`content.items.${0}.fullName`).charAt(0)}</AvatarFallback>
                        </Avatar>
                    </div>
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
                        <DNDWrapper
                            items={links}
                            onChange={setLinks}
                            getId={(items) => items.url || ''}
                            renderItem={(item, index, dragHandleProps) => (
                                <ShowLinks
                                    Dragger={
                                        <>
                                            <Button className="cursor-grab" size={'icon'} {...dragHandleProps.attributes}
                                                {...dragHandleProps.listeners}><GripVertical /></Button>
                                        </>
                                    }
                                    handleRemoveLink={handleRemoveLink}
                                    iconIndex={item.icons}
                                    url={item.url || ""}
                                    label={item.label || ""}
                                    index={index}
                                    key={index} />
                            )}
                        />
                        <h1 className="font-semibold mt-4">Add Links</h1>
                        <AddLinkForm setLinks={setLinks} Links={links} />
                    </div>
                    <div className="space-y-2">
                        <Button className="w-full" type="submit" disabled={loading}>
                            {loading ? "Saving..." : <>
                                SAVE
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


const ShowLinks = ({ iconIndex, url, label, handleRemoveLink, index, Dragger }: { iconIndex?: number; label: string; index: number; url: string, handleRemoveLink: (index: number) => void; Dragger?: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-[40px_auto_80px] gap-2 border rounded mb-1 items-center p-1">
            <Button size={"icon"} variant={'ghost'} type="button">
                {iconIndex && !isNaN(iconIndex) ? <SVGIcon size={16} icon={SVG[iconIndex]} /> : ""}
            </Button>
            <div className="flex flex-col justify-center overflow-hidden">
                <span className="text-sm font-semibold">{label}</span>
                <span className="text-[10px]">{url}</span>
            </div>
            <div className="flex gap-1 items-center">
                {Dragger}
                <Button onClick={() => handleRemoveLink(index)} size={'icon'} className="bg-red-600 hover:bg-red-500" type="button">
                    <Trash />
                </Button>
            </div>
        </div>
    )
}



const AddLinkForm = ({ setLinks, Links }: { setLinks: React.Dispatch<React.SetStateAction<LinksType[]>>; Links: LinksType[] }) => {
    const [iconIndex, setIconIndex] = useState<number>();
    const [label, setLabel] = useState<string>("");
    const [linkError, setLinkError] = useState<string>('')
    const [url, setUrl] = useState<string>("");
    const onAddLink = () => {
        if (label.length == 0 && url.length == 0) return;
        const urls = Links.map(e => e.url)
        if (urls.includes(url)) {
            setLinkError("Link already exists")
            return
        }
        setLinkError('')
        setLinks((prev) => [...prev, { icons: iconIndex, label, url }]);
        setIconIndex(undefined);
        setLabel("");
        setUrl("");
    }

    return (
        <div className="grid grid-cols-[auto_60px] gap-2 border-1 p-2 rounded">
            <div className="grid grid-cols-1 gap-2">
                <div className="flex gap-1 items-center">
                    <SVGPicker setIconIndex={setIconIndex} iconIndex={iconIndex} />
                    <Input value={label} onChange={(e) => setLabel(e.target.value)} type="text" placeholder="Label" />
                </div>
                <Input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" type="text" />
                <p className="text-red-600 text-sm">{linkError}</p>
            </div>
            <div className="mt-auto">
                <Button type="button" onClick={onAddLink} >Add</Button>
            </div>
        </div>
    )
}