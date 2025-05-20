'use client'
import { Button } from "@/components/ui/button"

import { DownloadIcon, FileTextIcon, LogIn, RocketIcon, User, WandSparkles } from "lucide-react"
import { ModeToggle } from "../toggle-theme"
import { ProgressBarLink } from "@/providers/progress-bar-provider"
import { SignInButton, useAuth, UserButton } from "@clerk/nextjs"
import { useEffect } from "react"

export default function Header() {
    const { userId } = useAuth()
    useEffect(() => {
        console.log(userId);
    }, [userId])
    return (
        <header className="px-4 md:px-16 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-[55px] items-center justify-between">
                {/* Logo and Main Navigation */}
                <div className="flex items-center space-x-6">
                    <ProgressBarLink href="/" className="flex items-center space-x-2">
                        <RocketIcon className="h-6 w-6 text-primary" />
                        <span className="text-lg font-bold inline-block">{process.env.NEXT_PUBLIC_APP_NAME || "ResumeBuilder"}</span>
                    </ProgressBarLink>
                </div>
                {/* Right Side Actions */}
                <div className="flex items-center space-x-4">
                    <nav className="hidden lg:flex items-center space-x-6">
                        <ProgressBarLink href="/builder" className="text-sm font-medium transition-colors hover:text-primary flex items-center">
                            <WandSparkles className="mr-1 h-4 w-4" />
                            Builder
                        </ProgressBarLink>
                        <ProgressBarLink href="/templates" className="text-sm font-medium transition-colors hover:text-primary flex items-center">
                            <FileTextIcon className="mr-1 h-4 w-4" />
                            Templates
                        </ProgressBarLink>
                        <ProgressBarLink href="/examples" className="text-sm font-medium transition-colors hover:text-primary flex items-center">
                            <User className="mr-1 h-4 w-4" />
                            Examples
                        </ProgressBarLink>
                    </nav>
                    <Button variant="outline" size="sm" className="hidden sm:flex">
                        <DownloadIcon className="mr-2 h-4 w-4" />
                        Export PDF
                    </Button>
                    <ModeToggle />
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: {
                                    width: 24,
                                    height: 24,
                                },
                                cardBox: {
                                    width: 54
                                }
                            },
                        }}
                    ></UserButton>
                    {
                        userId && userId.length > 0 ? null : <SignInButton>
                            <Button size={'sm'}>Sign in <LogIn /></Button>
                        </SignInButton>
                    }
                </div>
            </div>
        </header>
    )
}