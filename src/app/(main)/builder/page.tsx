import { Metadata } from "next";
import ResumeBuilder from "./resume-builder";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
    title: "Builder"
}
function page() {
    return (
        <Suspense fallback={<Skeleton className="h-96 w-full mx-4 md:mx-16 my-4" />}>
            <div className="flex grow flex-col">
                <ResumeBuilder />
            </div>
        </Suspense>
    )
}

export default page




