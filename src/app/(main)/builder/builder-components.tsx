'use client'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ProgressBarLink } from "@/providers/progress-bar-provider"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useState } from "react"



export const BuilderHeader = () => {
    const searchParams = useSearchParams()
    const [hide, setHide] = useState<boolean>(searchParams.get("header-hide") == "0" ? false : true)

    const hideHeader = () => {
        const newSearchParams = new URLSearchParams(searchParams)
        if (hide == true) {
            newSearchParams.set("header-hide", "0")
            setHide(!hide)
        } else {
            newSearchParams.delete("header-hide")
            setHide(!hide)
        }
        window.history.replaceState(null, "", "?" + newSearchParams.toString())
    }
    
    return (
        <div className="relative border-b">
            <div className={cn("h-20 md:h-12 overflow-hidden transition-all flex items-center justify-center", {
                "!h-0": hide,
                "h-20 md:h-12": !!hide
            })}>
                <header className="flex text-sm items-center flex-wrap space-x-2 justify-center px-4 md:px-16">
                    <p>
                        <strong>1. </strong>
                        Fill the details below.
                    </p>
                    <p>
                        <strong>2. </strong>
                        adjust section order & preview.
                    </p>
                    <p>
                        <strong>3. </strong>
                        Select your desired template.
                    </p>
                    <p>
                        <strong>4. </strong>
                        Download it in pdf or docx form.
                    </p>
                </header>
            </div>
            <div className="flex p-0 m-0 text-muted-foreground justify-between items-center px-4">
                <p className="text-sm m-0 text-center flex-auto">Follow the steps given to create your desired resume.</p>
                <span onClick={hideHeader}>
                    {hide ? <ChevronDown className="text-muted-foreground" /> : <ChevronUp className="text-muted-foreground" />}
                </span>
            </div>
        </div>
    )
}

export const BuilderFooter = () => {
    return (
        <footer className="w-full border-t px-3 py-4">
            <div className="max-w-7xl mx-auto flex flex-warp justify-between gap-3">
                <div className="flex items-center gap-3">
                    <Button size={'sm'} variant={'secondary'}>Previous</Button>
                    <Button size={'sm'} >Next</Button>
                </div>
                <div className="flex items-center gap-3">
                    <Button size={'sm'} variant={'secondary'} asChild>
                        <ProgressBarLink href={'/'}>Close</ProgressBarLink>
                    </Button>
                    <p className="text-muted-foreground opacity-0">Saving...</p>
                </div>
            </div>
        </footer>
    )
}

