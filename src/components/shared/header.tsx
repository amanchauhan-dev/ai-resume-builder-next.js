import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DownloadIcon, FileTextIcon, RocketIcon, Settings, User, WandSparkles } from "lucide-react"
import { ModeToggle } from "../toggle-theme"
import { ProgressBarLink } from "@/providers/progress-bar-provider"

export default function Header() {
    return (
        <header className="px-4 md:px-16 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo and Main Navigation */}
                <div className="flex items-center space-x-6">
                    <ProgressBarLink href="/" className="flex items-center space-x-2">
                        <RocketIcon className="h-6 w-6 text-primary" />
                        <span className="text-lg font-bold inline-block">ResumeCraft</span>
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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/avatars/01.png" alt="John Does" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuItem className="flex items-center">
                                <User className="mr-2 h-4 w-4" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                                <FileTextIcon className="mr-2 h-4 w-4" />
                                My Resumes
                            </DropdownMenuItem>
                            <DropdownMenuItem className="flex items-center">
                                <Settings className="mr-2 h-4 w-4" />
                                Settings
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}