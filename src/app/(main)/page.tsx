import { Separator } from "@/components/ui/separator";
import { ProgressBarLink } from "@/providers/progress-bar-provider";
import { Button } from "@/components/ui/button";
import ResumeList from "./resume-list";

export default function Home() {
  return (
    <div className="min-h-96 space-y-1 flex flex-col py-5 px-4 md:px-16">
      <div className="flex">
             <ProgressBarLink href={'/builder'} className="m-auto">
            <Button className="cursor-pointer"> Build Resume
            </Button>
        </ProgressBarLink>
      </div>
      <div className="space-y-1">
        <h1 className="text-muted-foreground font-semibold">Recently Worked</h1>
        <Separator />
        <ResumeList/>
      </div>
    </div>
  );
}
