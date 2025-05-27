import {
    Mail,
    Phone,
    User,
    Briefcase,
    GraduationCap,
    Globe,
    FileText,
    Github,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    MapPin,
    Calendar,
    Star,
    Award,
    Languages,
    BookOpen,
    FolderOpen,
    Cpu,
    Code,
    PenTool,
    Lightbulb,
    Hammer,
    Wrench,
    Music,
    Camera,
    Paintbrush,
    Gamepad,
    Mic,
    Smile,
    Heart,
    MessageCircle,
    Send,
    Link,
    Download,
    ChevronRight,
    Plus,
    Minus,
    Trash2,
    Edit,
    Check,
    X,
} from "lucide-react";

export const resumeIcons = {
    // Contact
    Mail,
    Phone,
    User,
    MapPin,
    Globe,

    // Resume/Docs
    FileText,
    Download,
    Calendar,

    // Work & Education
    Briefcase,
    GraduationCap,
    Award,
    BookOpen,
    FolderOpen,

    // Skills & Projects
    Cpu,
    Code,
    PenTool,
    Lightbulb,
    Hammer,
    Wrench,

    // Social / Links
    Github,
    Linkedin,
    Twitter,
    Facebook,
    Instagram,
    Link,

    // Hobbies / Interests
    Music,
    Camera,
    Paintbrush,
    Gamepad,
    Mic,
    Smile,
    Heart,

    // Communication
    MessageCircle,
    Send,

    // Common UI
    Star,
    ChevronRight,
    Plus,
    Minus,
    Trash2,
    Edit,
    Check,
    X,
};

export type IconName = keyof typeof resumeIcons;

export const resumeIconList = Object.entries(resumeIcons).map(([name, icon]) => ({
    name,
    icon,
}));

export const GetIcon = (name: IconName) => {
     return resumeIcons[name];
} 