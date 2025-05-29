'use client'
import { useResume } from "@/hooks/use-resume"
import { TemplateProps } from "@/lib/template-register"
import { EducationSection, ExperienceSection, LanguagesSection, PersonalSection, ResumeStyles, SkillsSection, SummarySection } from "@/lib/validations"
import { Fragment, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { DotIcon, Mail, MapPin, Phone, User, Workflow } from "lucide-react"
import { AgeCalculator } from "@/lib/date-functions"
import { Separator } from "../ui/separator"
import { format, parse } from "date-fns";
function DefaultTemplate({ resume }: TemplateProps) {
    const { setResume } = useResume()
    const style: ResumeStyles = {
        fontFamily: "",
        theme: '',
        fontSize: 16,
        padding: 20,

    }

    useEffect(() => {
        setResume((prev) => ({ ...prev, style }))
    }, [])

    return (
        <>
            <div className='text-wrap' style={{ ...style }}>
                {
                    resume.sections && resume.sections.map((e,i) => {
                        let section = <Fragment key={i}></Fragment>;
                        switch (e.type) {
                            case "personal":
                                section = <PersonalSectionDisplay key={e.id} {...e as PersonalSection} />
                                break;
                            case "summary":
                                section = <SummarySectionDisplay key={e.id} {...e as SummarySection} />
                                break;
                            case "education":
                                section = <EducationSectionDisplay key={e.id} {...e as EducationSection} />
                                break;
                            case "experience":
                                section = <ExperienceSectionDisplay key={e.id} {...e as ExperienceSection} />
                                break;
                            case "skills":
                                section = <SkillsSectionDisplay key={e.id} {...e as SkillsSection} />
                                break;
                            case "languages":
                                section = <LanguagesSectionDisplay key={e.id} {...e as LanguagesSection} />
                                break;
                            default:
                                break;
                        }
                        return (
                            <Fragment key={i}>
                                <h1 className="first:hidden font-semibold text-muted-foreground text-lg mb-2">{e.title}</h1>
                                {section}
                                <Separator className="last:hidden my-3" />
                            </Fragment>
                        )
                    })
                }
                {/* {JSON.stringify(resume, null, 2)} */}
            </div>
        </>
    )
}

export default DefaultTemplate





const PersonalSectionDisplay = ({ content }: PersonalSection) => {
    return (
        <div className="flex gap-5 items-center">
            <div className="">
                <Avatar className="w-32 h-32 mx-auto rounded-full">
                    <AvatarImage src={content.items?.[0]?.avatarURL || ''} alt="Profile" />
                    <AvatarFallback>{(content.items?.[0]?.fullName).charAt(0)}</AvatarFallback>
                </Avatar>
            </div>
            <div className="">
                <div className="text-xl font-semibold">{content.items?.[0].fullName}</div>
                <div className="flex gap-1 item-center">{content.items?.[0].jobRole}</div>
                <div className="flex item-center">
                    <h1 className="flex items-center gap-2">
                        <MapPin size={16} /> {content.items?.[0].address}
                    </h1>
                </div>
                <div className="flex item-center gap-4">
                    <h1 className="flex items-center gap-2">
                        <Mail size={16} /> {
                            content.items?.[0].email
                        }
                    </h1>
                    <h1>|</h1>
                    <h1 className="flex items-center gap-2">
                        <Phone size={16} /> {
                            content.items?.[0].phone
                        }
                    </h1>
                </div>
                <div className="flex gap-1 item-center">Age: {AgeCalculator(content.items?.[0].dateOfBirth || '')} Years</div>
            </div>
        </div>
    )
}

const EducationSectionDisplay = ({ content }: EducationSection) => {
    return (
        <div className="flex flex-col gap-1 space-y-2">
            {content.items && content.items[0].educations && content.items[0].educations.map((e) => {
                return (
                    <div key={e.id} className="relative">
                        <div className="pl-6">
                            <div>
                                <div className="text-md font-semibold flex gap-2 items-center ">
                                    <DotIcon className="absolute left-0" />{e.degree} {e.fieldOfStudy && " - " + e.fieldOfStudy} |
                                    <div className="text-sm font-normal text-muted-foreground">
                                        <p>
                                            {e.startYear && format(parse(e.startYear, "yyyy-M-d", new Date()), "MMMM d, yyyy") || "Present"}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm">{e.institution}  {e.location && (
                                    <span>
                                        - {e.location}
                                    </span>
                                )}</p>
                            </div>
                            {e.description && <p className="text-sm">{e.description}</p>}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
const ExperienceSectionDisplay = ({ content }: ExperienceSection) => {
    return (
        <div className="flex flex-col gap-1 space-y-2">
            {content.items && content.items[0].experiences && content.items[0].experiences.map((e) => {
                return (
                    <div key={e.id} className="relative">
                        <div className="pl-6">
                            <div>
                                <div className="text-md font-semibold flex gap-2 items-center ">
                                    <DotIcon className="absolute left-0" />{e.position} |
                                    <div className="text-sm font-normal text-muted-foreground">
                                        <p>
                                            {format(parse(e.startDate, "yyyy-M-d", new Date()), "MMMM d, yyyy")} -{" "}
                                            {e.endDate && format(parse(e.endDate, "yyyy-M-d", new Date()), "MMMM d, yyyy") || "Present"}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm flex items-center gap-2">
                                    {e.company}  {e.location && (
                                        <span >
                                            - {e.location}
                                        </span>
                                    )}
                                </p>
                            </div>

                            {e.description && <p className="text-sm">{e.description}</p>}
                            {e.reference && (
                                <>
                                    <div className="text-sm flex flex-wrap gap-2 items-center">
                                        {e.reference.name && <p className="flex gap-1 items-center"><User size={14} /> {e.reference.name}</p>}|
                                        {e.reference.position && <p className="flex gap-1 items-center"><Workflow size={14} /> {e.reference.position}</p>}|
                                        {e.reference.phone && <p className="flex gap-1 items-center"><Phone size={14} /> {e.reference.phone}</p>}|
                                        {e.reference.email && <p className="flex gap-1 items-center"><Mail size={14} /> {e.reference.email}</p>}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
const SkillsSectionDisplay = ({ content }: SkillsSection) => {
    return (
        <div className=" flex gap-3 flex-wrap">
            {
                content.items?.[0].skills && content.items[0].skills.map((e) => {
                    return (
                        <Fragment key={e.id}>
                            <div>{e.name}</div>
                            <h1 className="last:hidden">|</h1>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
const LanguagesSectionDisplay = ({ content }: LanguagesSection) => {
    return (
        <div className=" flex gap-3 flex-wrap">
            {
                content.items?.[0].languages && content.items[0].languages.map((e) => {
                    return (
                        <Fragment key={e.id}>
                            <div>{e.name}</div>
                            <h1 className="last:hidden">|</h1>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
const SummarySectionDisplay = ({ content }: SummarySection) => {
    return (
        <div className="pl-3">
            {
                content.items?.[0].summary
            }
        </div>
    )
}


