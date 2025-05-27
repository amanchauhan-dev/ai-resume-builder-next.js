import { Button } from "@/components/ui/button";
import { ProgressBarLink } from "@/providers/progress-bar-provider";
import { ArrowRight } from "lucide-react";

// app/not-found.tsx
export default function NotFound() {
    return (
        <div className="space-y-4" style={{ textAlign: 'center', marginTop: 50 }}>
            <h1 className="text-primary text-4xl font-semibold">{process.env.NEXT_PUBLIC_APP_NAME || 'Resumes'}</h1>
            <h1 className="text-primary text-2xl font-semibold">404 - Page Not Found</h1>
            <p>Sorry, the page you requested does not exist.</p>
            <p>Go to
                <ProgressBarLink href={'/'}>
                    <Button variant={'link'}>Home Page <ArrowRight /></Button>
                </ProgressBarLink></p>
        </div>
    );
}
