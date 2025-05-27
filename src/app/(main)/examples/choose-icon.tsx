'use client'

import SVGIcon from "@/components/svg-icon";
import SVGPicker from "@/components/svg-picker"
import { SVG } from "@/lib/svg";
import { useState } from "react";

function ChooseIcon() {
    const [iconIndex, setIconIndex] = useState<number>();
    return (
        <div>
            <SVGPicker iconIndex={iconIndex} setIconIndex={setIconIndex} />
            {iconIndex && <SVGIcon size={18} icon={SVG[iconIndex]} />}
        </div>
    )
}

export default ChooseIcon