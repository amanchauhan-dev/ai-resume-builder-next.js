import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProgressBarLink } from "@/providers/progress-bar-provider";
import { Plus } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-96 space-y-1 flex flex-col py-5 px-4 md:px-16">
      <div className="flex">
        <ProgressBarLink href={'/builder'} className="m-auto">
          <Button className="cursor-pointer"><Plus /> Create A New Resume
          </Button>
        </ProgressBarLink>
      </div>
      <div className="space-y-1">
        <h1 className="text-muted-foreground font-semibold">Recently Worked</h1>
        <Separator />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 455].map((_, i) => {
            return (
              <div key={i} className="h-54 w-40 bg-muted flex justify-center items-center rounded-md">
                Resume {i}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
