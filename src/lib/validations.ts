import { z } from "zod";


export const resumeSectionContentSchema = z.object({
    description: z.string().optional(),
    items: z.array(z.any()).optional(),
})

export const resumeSectionSchema = z.object({
    id: z.string().optional(),
    title: z.string().min(5, "Title is required"),
    content: resumeSectionContentSchema.optional().nullable(),
    resumeId: z.string().optional(),
    order: z.number().optional(),
    type: z.string().min(1, "Type is required"),
});

export const resumeSchema = z.object({
    id: z.string().optional().nullable(),
    title: z.string().min(1, "Title is required"),
    userId: z.string(),
    templateId: z.string().optional().nullable(),
    sections: z.array(resumeSectionSchema).optional(),
    version: z.string().optional().nullable(),
    createAt: z.date().optional().nullable(),
    updatedAt: z.date().optional().nullable(),
})
export type Resume = z.infer<typeof resumeSchema>;
export type ResumeSection = z.infer<typeof resumeSectionSchema>;
export type ResumeSectionContent = z.infer<typeof resumeSectionContentSchema>;

export const personalSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                avatarURL: z.string().url().optional(),
                fullName: z.string(),
                jobRole: z.string().optional(),
                address: z.string().optional(),
                email: z.string().email(),
                phone: z.string().optional(),
                dateOfBirth: z.string().optional(),
                links: z.array(
                    z.object({
                        label: z.string().optional(),
                        url: z.string().url().optional(),
                        icon: z.string().optional(),
                    })).optional(),
            })
        )
    })
})

export type PersonalSection = z.infer<typeof personalSectionSchema>;


export const summarySectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                summary: z.string(),
            })
        )
    })
});
export type SummarySection = z.infer<typeof summarySectionSchema>;

export const experienceItemSchema = z.object({
    id: z.string(),
    company: z.string().min(1, "Required"),
    position: z.string().min(1, "Required"),
    startDate: z.string().min(1, "Required"),
    endDate: z.string().optional(),
    location: z.string().optional(),
    description: z.string().optional(),
    reference: z.object({
        name: z.string().optional(),
        position: z.string().optional(),
        phone: z.string().optional(),
        email: z.string().optional()
    }).optional()
})

export type ExperienceItem = z.infer<typeof experienceItemSchema>;
export const experienceSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                experiences: z.array(experienceItemSchema),
            })
        )
    })
});
export type ExperienceSection = z.infer<typeof experienceSectionSchema>;

export const skillItemSchema = z.object({
    id: z.string(),
    name: z.string().min(1, 'Required'),
    proficiency: z.enum(["beginner", "intermediate", "advanced", "expert", 'none']),
    description: z.string().optional(),
})
export type SkillItem = z.infer<typeof skillItemSchema>;
export const skillsSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                skills: z.array(
                    skillItemSchema
                ).optional(),
                showDescription: z.boolean().optional(),
                showProficiency: z.boolean().optional(),
            })
        )
    })
});
export type SkillsSection = z.infer<typeof skillsSectionSchema>;

export const projectsSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                projects: z.array(z.object({
                    name: z.string(),
                    description: z.string(),
                    link: z.string().url().optional(),
                    tags: z.array(z.string()).optional(),
                })),
            })
        )
    })
});
export type ProjectsSection = z.infer<typeof projectsSectionSchema>;

export const languageItemSchema = z.object({
    id: z.string(),
    name: z.string().min(1,'Required'),
    proficiency: z.enum(["basic", "intermediate", "fluent", "native","none"]),
})
export type LanguageItem = z.infer<typeof languageItemSchema>

export const languagesSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                languages: z.array(languageItemSchema),
                showProficiency: z.boolean().optional(),
            })
        )
    })
});
export type LanguagesSection = z.infer<typeof languagesSectionSchema>;

export const declarationSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                declaration: z.string(),
            })
        )
    })
});
export type DeclarationSection = z.infer<typeof declarationSectionSchema>;

export const educationItemSchema = z.object({
    id: z.string(),
    institution: z.string().min(1, "Required"),
    description: z.string().optional(),
    location: z.string().optional(),
    degree: z.string().min(1, "Required"),
    fieldOfStudy: z.string().optional(),
    startYear: z.string().optional(),
    endYear: z.string().optional(),
})

export type EducationItem = z.infer<typeof educationItemSchema>;
export const educationSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                educations: z.array(educationItemSchema),
            })
        )
    })
});
export type EducationSection = z.infer<typeof educationSectionSchema>;

export const certificationsSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                certifications: z.array(z.object({
                    name: z.string(),
                    issuer: z.string(),
                    date: z.string(),
                })),
            })
        )
    })
});
export type CertificationsSection = z.infer<typeof certificationsSectionSchema>;

export const referencesSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                references: z.array(z.object({
                    name: z.string(),
                    contact: z.string(),
                    relation: z.string(),
                })),
            })
        )
    })
});
export type ReferencesSection = z.infer<typeof referencesSectionSchema>;

export const hobbiesSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                hobbies: z.array(z.string()),
            })
        )
    })
});

export type HobbiesSection = z.infer<typeof hobbiesSectionSchema>;

export const achievementsSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                achievements: z.array(z.string()),
            })
        )
    })
});

export type AchievementsSection = z.infer<typeof achievementsSectionSchema>;
export const customSectionSchema = resumeSectionSchema.extend({
    content: z.object({
        description: z.string().optional(),
        items: z.array(
            z.object({
                title: z.string().min(1, "Title is required"),
                description: z.string().optional(),
                tags: z.array(z.string()).optional(),
                links: z.array(z.object({
                    label: z.string(),
                    url: z.string().url("Invalid URL"),
                })).optional(),
            })
        )
    })
});
export type CustomSection = z.infer<typeof customSectionSchema>;