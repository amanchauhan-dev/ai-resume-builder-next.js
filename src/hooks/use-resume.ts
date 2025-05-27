import { ResumeContext } from "@/providers/resume-provider"
import { useContext } from "react"

export const useResume = () => {
    const ctx = useContext(ResumeContext)
    return { ...ctx}
}