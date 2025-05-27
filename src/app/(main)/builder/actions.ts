"use server"

import { prisma } from "@/lib/prisma";
import { Resume as ResumeValidType } from "@/lib/validations"
import { Resume } from "@prisma/client";

const newResumeDefaultSections = [
    {
        type: "summary",
        title: "Summary",
        order: 1,
        content: {

            items: [],
        },
    },
    {
        type: "experience",
        title: "Experience",
        order: 2,
        content: {
            items: [],
        },
    },
    {
        type: "education",
        title: "Education",
        order: 3,
        content: {
            items: [],
        },
    },
    {
        type: "skills",
        title: "Skills",
        order: 4,
        content: {
            items: [],
        },
    },
    {
        type: "languages",
        title: "Languages",
        order: 5,
        content: {
            items: [],
        },
    },
]

export const CreateNewResume = async ({ userId }: { userId: string }): Promise<{ success: boolean, data?: any, message: string }> => {
    try {
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            throw new Error("User not found");
        }

        const personalItems = {
            type: "personal",
            title: "Personal Information",
            order: 0,
            content: {
                items: [
                    {
                        email: user.email || "",
                        fullName: user.name || "",
                        avatarURL: user.avatarURL || "",
                    }
                ],
            },
        }
        // Create a new resume
        const newResume = await prisma.resume.create({
            data: {
                title: "New Resume",
                userId: user.id,
                sections: {
                    create: [personalItems, ...newResumeDefaultSections],
                },
            },
            include: {
                sections: true
            }
        });

        return {
            success: true,
            message: "New resume created successfully",
            data: newResume
        }
    } catch (error: any) {
        console.error("❌Error creating new resume:", error.message);
        return {
            success: false,
            message: error.message || "Failed to create new resume"
        }
    }
}

export const GetResumeById = async ({ resumeId }: { resumeId: string }): Promise<{ success: boolean, data?: Resume, message: string }> => {
    try {
        const resume = await prisma.resume.findUnique({
            where: { id: resumeId },
            include: {
                sections: true,
            },
        });

        if (!resume) {
            throw new Error("Resume not found");
        }
        return {
            success: true,
            message: "Resume retrieved successfully",
            data: resume as any
        }
    } catch (error: any) {
        console.error("❌Error retrieving resume:", error.message);
        return {
            success: false,
            message: error.message || "Failed to retrieve resume"
        }
    }
}

export const GetAllResumesByUserId = async ({ userId }: { userId: string }): Promise<{ success: boolean, data?: any[], message: string }> => {
    try {
        const resumes = await prisma.resume.findMany({
            where: { userId: userId },
            include: {
                sections: true,
            },
        });

        if (!resumes || resumes.length === 0) {
            throw new Error("No resumes found for this user");
        }

        return {
            success: true,
            message: "Resumes retrieved successfully",
            data: resumes
        }
    } catch (error: any) {
        console.error("❌Error retrieving resumes:", error.message);
        return {
            success: false,
            message: error.message || "Failed to retrieve resumes"
        }
    }
}


export const DeleteResumeById = async ({ resumeId }: { resumeId: string }): Promise<{ success: boolean, message: string }> => {
    try {
        const resume = await prisma.resume.findUnique({ where: { id: resumeId } });
        if (!resume) {
            throw new Error("Resume not found");
        }

        await prisma.resume.delete({ where: { id: resumeId } });

        return {
            success: true,
            message: "Resume deleted successfully"
        }
    } catch (error: any) {
        console.error("❌Error deleting resume:", error.message);
        return {
            success: false,
            message: error.message || "Failed to delete resume"
        }
    }
}



export const UpdateResumeById = async ({ resumeId, data }: { resumeId: string, data: ResumeValidType }): Promise<{ success: boolean, message: string, data?: ResumeValidType }> => {
    try {
        const resume = await prisma.resume.findUnique({ where: { id: resumeId } });
        if (!resume) {
            throw new Error("Resume not found");
        }
        const updateSections = data.sections?.map(section => {
            return prisma.resumeSection.update({
                where: { id: section.id || '' },
                data: {
                    title: section.title,
                    type: section.type,
                    order: section.order,
                    content: {
                        items: section.content?.items || [],
                    },
                }
            })
        })
        const updateResume = prisma.resume.update({
            where: { id: resumeId },
            data: {
                title: data.title
            },
            include: { sections: true }
        })
        await prisma.$transaction([updateResume, ...updateSections || []]);
        return {
            success: true,
            message: "Resume updated successfully",
        }
    } catch (error: any) {
        console.error("❌Error updating resume:", error.message);
        return {
            success: false,
            message: error.message || "Failed to update resume"
        }
    }
}