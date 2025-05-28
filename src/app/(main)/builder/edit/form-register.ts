import { LucideIcon, Text, Users2 } from "lucide-react";
import PersonalInfoForm from "./forms/personal-info-form";
import GeneralResumeDetailForm from "./forms/general-resume-detail-form";
import SummaryForm from "./forms/summary-form";
import EducationForm from "./forms/education-form";
import ExperienceForm from "./forms/experience-form";
import SkillsForm from "./forms/skills-form";
import LanguagesForm from "./forms/languages-form";

export const FormRegister: {
    id?: string;
    type: string;
    name: string;
    component: React.ComponentType<any>;
    icon: LucideIcon;
    description: string;
    order: number;
    isVisible?: boolean;
}[] = [
        {
            type: "",
            name: "General",
            component: GeneralResumeDetailForm,
            icon: Users2,
            description: "Add your personal information like name, contact details, and address.",
            order: 0,
            isVisible: true
        },
        {
            type: "personal",
            name: "Personal Info",
            component: PersonalInfoForm,
            icon: Users2,
            description: "Add your personal information like name, contact details, and address.",
            order: 0,
            isVisible: true
        },
        {
            type: "summary",
            name: "Summary",
            icon: Text,
            component: SummaryForm,
            description: "Write a brief summary of your professional background and career goals.",
            order: 0,
            isVisible: true
        },
        {
            type: "education",
            name: "Education",
            icon: Text,
            component: EducationForm,
            description: "List your educational qualifications, including degrees and certifications.",
            order: 0,
            isVisible: true
        },
        {
            type: "experience",
            name: "Experience",
            icon: Text,
            component: ExperienceForm,
            description: "Detail your work experience, including job titles, companies, and responsibilities.",
            order: 0,
            isVisible: true
        },
        {
            type: "skills",
            name: "Skills",
            icon: Text,
            component: SkillsForm,
            description: "Highlight your key skills relevant to the job you are applying for.",
            order: 0,
            isVisible: true
        },
        {
            type: "languages",
            name: "Languages",
            icon: Text,
            component: LanguagesForm,
            description: "List the languages you speak and your proficiency level in each.",
            order: 0,
            isVisible: true
        },
        {
            type: "declaration",
            name: "Declaration",
            icon: Text,
            component: PersonalInfoForm,
            description: "Include a declaration statement if required by the job application.",
            order: 0,
            isVisible: true
        },
        {
            type: "custom",
            name: "Custom Section",
            icon: Text,
            component: PersonalInfoForm,
            description: "Add any custom section that you want to include in your resume.",
            order: 0,
            isVisible: true
        }
    ]