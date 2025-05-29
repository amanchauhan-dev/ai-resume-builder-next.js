import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { Resume } from "@/lib/validations";
import useDimensions from "@/hooks/use-dimensions";
import DefaultTemplate from "./templates/default-template";
import ModernTemplate from "./templates/modern-template";
import ClassicTemplate from "./templates/classic-template";

interface ResumePreviewProps {
    resumeData: Resume;
    contentRef?: React.Ref<HTMLDivElement>;
    className?: string;
}

export default function ResumePreview({
    resumeData,
    contentRef,
    className,
}: ResumePreviewProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { width } = useDimensions(containerRef as any);

    let Template = DefaultTemplate

    switch (resumeData.templateId) {
        case 'classic':
            Template = ClassicTemplate
            break;
        case 'modern':
            Template = ModernTemplate
            break;
        default:
            Template = DefaultTemplate
            break;
    }


    return (
        <div
            id="resume"
            className={cn(
                "aspect-[210/297] h-fit w-full min-w-[300px] bg-white text-black shadow-xl relative",
                className,
            )}
            ref={containerRef}
        >
            <p className="text-[10px] text-muted-foreground absolute -top-4 hide-resume">{resumeData.title}</p>
            <p className="text-[10px] text-muted-foreground absolute -top-4 right-0 hide-resume">A4 SHEET</p>
            <div
                className={cn("space-y-6 p-6 h-full", !width && "invisible")}
                style={{
                    zoom: (1 / 794) * width,
                }}
                ref={contentRef}
                id="resumePreviewContent"
            >
                <Template resume={resumeData} />
            </div>
        </div>
    );
}
