'use client'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DownloadIcon, FileTextIcon, Home, Laptop, LogIn, Menu, Moon, RocketIcon, Sun, User, WandSparkles } from "lucide-react"
import { ModeToggle } from "../toggle-theme"
import { ProgressBarLink } from "@/providers/progress-bar-provider"
import { SignInButton, useAuth, UserButton } from "@clerk/nextjs"
import { useEffect } from "react"
import { useTheme } from "next-themes"

export default function Header() {
    const { userId } = useAuth()
    useEffect(() => {
        console.log(userId);
    }, [userId])
    return (
        <header className="px-4 md:px-16 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 hide-resume">
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
                        <ProgressBarLink href="/" className="text-sm font-medium transition-colors hover:text-primary flex items-center">
                            <Home className="mr-1 h-4 w-4" />
                            Home
                        </ProgressBarLink>
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
                    <div className="hidden lg:flex">
                        <ModeToggle />
                    </div>
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
                            <Button size={'sm'}><span className="hidden sm:inline">Sign in </span><LogIn /></Button>
                        </SignInButton>
                    }
                    <div className="lg:hidden">
                        <MobileNavigation />
                    </div>
                </div>
            </div>
        </header>
    )
}


const MobileNavigation = () => {
    const { setTheme } = useTheme()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="min-w-72 mr-5">
                <DropdownMenuLabel className="text-muted-foreground">Pages</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="flex flex-col">
                    <ProgressBarLink href={'/'} className="grid grid-cols-[24px_auto] items-center gap-3 hover:bg-muted">
                        <Button variant="ghost" size="icon" className="cursor-pointer">
                            <Home />
                        </Button>
                        <span>Home</span>
                    </ProgressBarLink>
                    <ProgressBarLink href={'/builder'} className="grid grid-cols-[24px_auto] items-center gap-3 hover:bg-muted ">
                        <Button variant="ghost" size="icon" className="cursor-pointer">
                            <WandSparkles />
                        </Button>
                        <span>Builder</span>
                    </ProgressBarLink>
                    <ProgressBarLink href={'/templates'} className="grid grid-cols-[24px_auto] items-center gap-3 hover:bg-muted ">
                        <Button variant="ghost" size="icon" className="cursor-pointer">
                            <FileTextIcon />
                        </Button>
                        <span>Templates</span>
                    </ProgressBarLink>
                    <ProgressBarLink href={'/examples'} className="grid grid-cols-[24px_auto] items-center gap-3 hover:bg-muted ">
                        <Button variant="ghost" size="icon" className="cursor-pointer">
                            <User />
                        </Button>
                        <span>Examples</span>
                    </ProgressBarLink>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-muted-foreground">Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="grid grid-cols-[24px_auto] items-center gap-3 hover:bg-muted cursor-pointer" onClick={() => setTheme('light')}>
                    <Button variant="ghost" size="icon" className="cursor-pointer ">
                        <Sun />
                    </Button>
                    <span>Light</span>
                </div>
                <div className="grid grid-cols-[24px_auto] items-center gap-3 hover:bg-muted cursor-pointer" onClick={() => setTheme('dark')}>
                    <Button variant="ghost" size="icon" className="cursor-pointer" >
                        <Moon />
                    </Button>
                    <span>Dark</span>
                </div>
                <div className="grid grid-cols-[24px_auto] items-center gap-3 hover:bg-muted cursor-pointer" onClick={() => setTheme('system')}>
                    <Button variant="ghost" size="icon" className="cursor-pointer">
                        <Laptop />
                    </Button>
                    <span>System</span>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}