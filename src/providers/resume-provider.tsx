'use client'
import { GetResumeById, UpdateResumeById } from "@/app/(main)/builder/actions";
import { Skeleton } from "@/components/ui/skeleton";
import { Resume, ResumeSection } from "@/lib/validations";
import { useSearchParams } from "next/navigation";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

export const initialResume: Resume = {
    id: '',
    title: '',
    userId: '',
    templateId: '',
    sections: [],
    version: '',
    createAt: null,
    updatedAt: null,

}

export type StepType = {
    id: string;
    type: string;

}

export interface ResumeContextProps {
    resume: Resume;
    setResume: Dispatch<SetStateAction<Resume>>,
    step: StepType;
    setStep: Dispatch<SetStateAction<StepType>>,
    sections: ResumeSection[];
    setSections: Dispatch<SetStateAction<ResumeSection[]>>,
    save: () => void;
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    handleStepChange: (step: StepType) => void,
    setResumeId: Dispatch<SetStateAction<string | null>>
    resumeId: string | null,
    loadingResume: boolean,

}

export const ResumeContext = createContext<ResumeContextProps>({
    resume: initialResume,
    setResume: () => { },
    step: { id: '', type: "" },
    setStep: () => { },
    sections: [],
    setSections: () => { },
    save: () => { },
    loading: false,
    setLoading: () => { },
    handleStepChange: () => { },
    setResumeId: () => { },
    resumeId: null,
    loadingResume: true
})


export const ResumeProvider = ({ children }: { children: ReactNode }) => {
    const params = useSearchParams();
    const [resume, setResume] = useState<Resume>(initialResume);
    const [resumeId, setResumeId] = useState<string | null>(null)
    const [sections, setSections] = useState<ResumeSection[]>([])
    const [step, setStep] = useState<StepType>({
        id: params.get('step-id') || '', type: params.get('step-type') || ''
    })
  

    const [loading, setLoading] = useState(true)
    const [loadingResume, setLoadingResume] = useState<boolean>(true);
    const [saveLoader, setSaveLoader] = useState<boolean>(false);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const [fresh, setFresh] = useState<number>(0)
    const save = () => setFresh(e => e + 1)

    const SaveResume = async () => {
        setSaveLoader(true);
        await UpdateResumeById({ resumeId: resume.id || '', data: resume });
        setSaveLoader(false);

    }

    useEffect(() => {
        if (resumeId == null || !resumeId || resumeId == '' || firstLoad == true) {
            if (firstLoad) {
                setFirstLoad(false);
                return
            }
            return
        }
        SaveResume()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fresh])

    useEffect(() => {
        if (resumeId == null || !resumeId || resumeId == '') {
            setLoading(false);
            return
        }
        setLoadingResume(true)
        GetResumeById({ resumeId: resumeId }).then(res => {
            if (res.data && res.success == true) {
                setResume(res.data)
            }
            else {
                window.history.replaceState(null, "", "?")
            }
        }).finally(() => {
            setLoading(false)
            setLoadingResume(false)
        })
    }, [resumeId])

    useEffect(() => {
        const data = resume.sections ? resume.sections?.map(e => {
            return {
                id: e.id,
                title: e.title,
                type: e.type,
                order: e.order
            }
        }) : []
        setSections(data)
    }, [resume])

    // handle step change

    const handleStepChange = ({ id, type, }: StepType) => {
        setStep({ id: id, type: type })
        const newSearchParams = new URLSearchParams(params)
        newSearchParams.set('step-id', id)
        newSearchParams.set('step-type', type)
        window.history.pushState(null, '', `?${newSearchParams.toString()}`)
    }



    if (loading) {
        return <Skeleton className=' h-96 mx-4 md:mx-16 mt-10' />
    }


    return (
        <ResumeContext.Provider
            value={
                {
                    resume: resume,
                    setResume: setResume,
                    step: step,
                    setStep: setStep,
                    sections: sections,
                    setSections: setSections,
                    save: save,
                    loading: saveLoader,
                    setLoading: setSaveLoader,
                    handleStepChange,
                    setResumeId,
                    resumeId,
                    loadingResume,
                }
            }>
            {children}
        </ResumeContext.Provider>
    )
}