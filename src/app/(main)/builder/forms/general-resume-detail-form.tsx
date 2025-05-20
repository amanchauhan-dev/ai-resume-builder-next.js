"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

function GeneralResumeDetailForm() {
    return (
        <div className="max-w-[600px] my-10 mx-auto px-4">
            <h1 className="text-xl font-semibold text-center">Resume Details</h1>
            <p className="text-center text-xm text-muted-foreground">These are the general details for your resume. This details will not be reflected on your resume.</p>
            <div className="space-y-5 py-5">
                <div className="space-y-2">
                    <Label htmlFor="resume-name">Resume Name</Label>
                    <Input id="resume-name" name="resume-name" placeholder="Ex: My-resume" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="resume-name">Description</Label>
                    <Textarea id="resume-name" name="resume-name" placeholder="Ex: This is my sample resume." />
                </div>
                <div className="space-y-2">
                    <Button className="w-full">NEXT <ArrowRight /></Button>
                </div>
            </div>
            <p className="text-sm text-muted-foreground">
                You will be able to change these details anytime.
            </p>
        </div>
    )
}

export default GeneralResumeDetailForm