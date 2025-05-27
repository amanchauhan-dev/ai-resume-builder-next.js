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
import SvgIcon from "./svg-icon"

function SVGPicker({ setIconIndex = () => { } }: { iconIndex?: number, setIconIndex?: (index: number) => void }) {
    const handleIconClick = (index: number) => {
        setIconIndex(index);
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">
                    <SvgIcon icon={SVG[0]} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Icon Picker</DialogTitle>
                    <DialogDescription className="hidden">
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 p-2">
                    {SVG.map((svg, i) => {
                        return (
                            <div key={i} onClick={() => handleIconClick(i)} className="flex flex-col items-center justify-center overflow-hidden">
                                <Button
                                    size={'icon'}
                                    variant={'ghost'}>
                                    <SvgIcon icon={svg} />
                                </Button>
                                <h1 className="text-sm">{svg.name}</h1>
                            </div>
                        )
                    })}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default SVGPicker