"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useResume } from "@/hooks/use-resume";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    title: z.string().min(1, "Title is required"),
});

type SchemaType = z.infer<typeof schema>;

function GeneralResumeDetailForm() {
    const { resume, setResume, loading, setLoading, save } = useResume();
    const title = resume.title || "My-Resume";
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<SchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            title: title,
        },
    });

    const onSubmit = (value: SchemaType) => {
        setLoading(true);
        setResume((prev) => {
            return { ...prev, title: value.title };
        });
        save()
    }

    return (
        <form className="max-w-[600px] my-10 mx-auto " onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-semibold text-center">General Details</h1>
            <p className="text-center text-sm text-muted-foreground">
                These are the general details for your resume. These details will not be reflected on your resume.
            </p>
            <div className="space-y-5 py-5">
                <div className="space-y-2">
                    <Label htmlFor="resume-title">Resume Name</Label>
                    <Input
                        id="resume-title"
                        {...register("title")}
                        placeholder="Ex: My-resume"
                        autoFocus
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm">{errors.title.message}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Button className="w-full" disabled={loading} type="submit">
                        {loading ? "Saving..." : <>
                            SAVE
                        </>}
                    </Button>
                </div>
            </div>
            <p className="text-sm text-muted-foreground">
                You will be able to change these details anytime.
            </p>
        </form>
    );
}

export default GeneralResumeDetailForm;
