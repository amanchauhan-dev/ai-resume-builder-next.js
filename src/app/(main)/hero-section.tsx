'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { ProgressBarLink } from "@/providers/progress-bar-provider";

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-10">
            <motion.h1
                className="text-4xl md:text-6xl font-bold text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Build Your Resume Effortlessly
            </motion.h1>
            <p className="text-muted-foreground text-center max-w-xl mb-8">
                Our modern and intuitive resume builder helps you create professional resumes in minutes. No design skills needed.
            </p>
            <ProgressBarLink href="/builder">
                <Button size="lg" className="text-lg">Get Started</Button>
            </ProgressBarLink>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-6xl w-full">
                <Card className="shadow-xl">
                    <CardContent className="p-6">
                        <CheckCircle className="text-primary w-8 h-8 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                        <p className="text-sm text-muted-foreground">
                            Drag-and-drop interface, customizable sections, and real-time preview.
                        </p>
                    </CardContent>
                </Card>
                <Card className="shadow-xl">
                    <CardContent className="p-6">
                        <CheckCircle className="text-primary w-8 h-8 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">AI Support</h3>
                        <p className="text-sm text-muted-foreground">
                            Get noticed by recruiters with optimized templates that pass applicant tracking systems.
                        </p>
                    </CardContent>
                </Card>
                <Card className="shadow-xl">
                    <CardContent className="p-6">
                        <CheckCircle className="text-primary w-8 h-8 mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Free Forever</h3>
                        <p className="text-sm text-muted-foreground">
                            Start building your resume for free. Only pay when you are ready to download.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
