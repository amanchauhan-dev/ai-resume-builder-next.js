import { Metadata } from "next";
import ResumeBuilder from "./resume-builder";
// import GeneralResumeDetailForm from "./forms/general-resume-detail-form";
// import BasicResumeData from "./forms/basic-resume-data";

export const metadata: Metadata = {
    title: "Builder"
}
function page() {
    return (
        <div className="flex grow flex-col">
            <ResumeBuilder />
        </div>
    )
}

export default page




