import { z } from "zod";

export const resumeSchema = z.object({
    id: z.string().optional(),
    title: z.string(),
    userId: z.string()

})