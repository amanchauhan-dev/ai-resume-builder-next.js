import ClassicTemplate from "@/components/templates/classic-template";
import DefaultTemplate from "@/components/templates/default-template";
import ModernTemplate from "@/components/templates/modern-template";
import { Resume } from "./validations";


export interface TemplateProps {
    resume: Resume
}



export const FormRegister: {
    id?: string;
    name: string;
    component: React.ComponentType<TemplateProps>;
    description: string;
}[] = [
        {
            id: "",
            name: "default",
            component: DefaultTemplate,
            description: "Default resume template to start with."
        },
        {
            id: "",
            name: "classic",
            component: ClassicTemplate,
            description: "Classic resume template to start with."
        },
        {
            id: "",
            name: "modern",
            component: ModernTemplate,
            description: "Modern resume template to start with."
        },
    ]