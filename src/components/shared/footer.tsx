'use client'
import { Button } from "@/components/ui/button"
import {
    Home,
    FileEdit,
    LayoutTemplate,
    UserSquare,
    Download,
    Sun,
    Moon,
    Laptop,
    Github,
    Twitter,
    Linkedin,
    HelpCircle,
    Mail,
    ShieldCheck
} from "lucide-react"
import { useTheme } from "next-themes"
import { ProgressBarLink } from "@/providers/progress-bar-provider"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Footer() {
    const { setTheme } = useTheme()
    const path = usePathname()
    return (
        <footer className={cn("bg-background border-t mt-auto", {
            "hidden": path == '/builder'
        })}>
            <div className="container px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 items-center md:grid-cols-4 gap-8">
                    {/* Brand Info */}
                    <div className="space-y-4 md:mx-auto">
                        <div className="flex items-center space-x-2">
                            <Home className="h-6 w-6 text-primary" />
                            <span className="text-lg font-bold">{process.env.NEXT_PUBLIC_APP_NAME || "ResumeBuilder"}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Build professional resumes in minutes. Free forever.
                        </p>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="icon">
                                <Github className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Twitter className="h-5 w-5" />
                            </Button>
                            <Button variant="ghost" size="icon">
                                <Linkedin className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3 md:mx-auto">
                        <h3 className="text-sm font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <ProgressBarLink href="/builder" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <FileEdit className="mr-2 h-4 w-4" />
                                    Resume Builder
                                </ProgressBarLink>
                            </li>
                            <li>
                                <ProgressBarLink href="/templates" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <LayoutTemplate className="mr-2 h-4 w-4" />
                                    Templates
                                </ProgressBarLink>
                            </li>
                            <li>
                                <ProgressBarLink href="/examples" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <UserSquare className="mr-2 h-4 w-4" />
                                    Examples
                                </ProgressBarLink>
                            </li>
                            <li>
                                <ProgressBarLink href="/export" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <Download className="mr-2 h-4 w-4" />
                                    Export Options
                                </ProgressBarLink>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="space-y-3 md:mx-auto">
                        <h3 className="text-sm font-semibold">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <ProgressBarLink href="/help" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <HelpCircle className="mr-2 h-4 w-4" />
                                    Help Center
                                </ProgressBarLink>
                            </li>
                            <li>
                                <ProgressBarLink href="/contact" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Contact Us
                                </ProgressBarLink>
                            </li>
                            <li>
                                <ProgressBarLink href="/privacy" className="text-sm text-muted-foreground hover:text-primary flex items-center">
                                    <ShieldCheck className="mr-2 h-4 w-4" />
                                    Privacy Policy
                                </ProgressBarLink>
                            </li>
                        </ul>
                    </div>

                    {/* Theme Switcher */}
                    <div className="space-y-3 md:mx-auto">
                        <h3 className="text-sm font-semibold">Appearance</h3>
                        <div className="flex flex-col space-y-2">
                            <Button
                                variant="ghost"
                                className="justify-start"
                                onClick={() => setTheme("light")}
                            >
                                <Sun className="mr-2 h-4 w-4" />
                                Light Mode
                            </Button>
                            <Button
                                variant="ghost"
                                className="justify-start"
                                onClick={() => setTheme("dark")}
                            >
                                <Moon className="mr-2 h-4 w-4" />
                                Dark Mode
                            </Button>
                            <Button
                                variant="ghost"
                                onClick={() => setTheme("system")}
                                className="justify-start"
                            >
                                <Laptop className="mr-2 h-4 w-4" />
                                System Preference
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t text-sm text-muted-foreground text-center">
                    <p>© {new Date().getFullYear()} ResumeCraft. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}