'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { SVG } from "@/lib/svg"
import SVGIcon from "./svg-icon"
import { useState } from "react"

function SVGPicker({ setIconIndex = () => { }, iconIndex }: { iconIndex?: number, setIconIndex?: (index: number) => void }) {
    const [open, setOpen] = useState(false);
    const handleIconClick = (index: number) => {
        setIconIndex(index);
        setOpen(false)
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size={'icon'}>
                    {iconIndex ? <SVGIcon size={18} icon={SVG[iconIndex]} />
                        : 'Icon'}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Icon Picker</DialogTitle>
                    <DialogDescription className="hidden">
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-2 p-2">
                    {SVG.map((svg, i) => {
                        return (
                            <div key={i} className="flex flex-col items-center justify-center overflow-hidden">
                                <div onClick={() => handleIconClick(i)} className="flex flex-col items-center cursor-pointer hover:bg-muted transition-colors p-2 rounded-md">
                                    <Button
                                        className="cursor-pointer"
                                        size={'icon'}
                                        variant={'ghost'}>
                                        <SVGIcon icon={svg} />
                                    </Button>
                                    <h1 className="text-sm">{svg.name}</h1>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SVGPicker