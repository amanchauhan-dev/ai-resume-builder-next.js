import { SVGType } from "@/lib/svg";
import Image from "next/image";
import React from "react";

interface SvgIconProps {
  icon: SVGType;
  className?: string;
  size?: number;
}

const SVGIcon: React.FC<SvgIconProps> = ({ icon, className = "", size = 24 }) => {
  if (icon.type === "dataURL") {
    return (
      <Image
        src={icon.dataURL || ''}
        alt={icon.key}
        width={size}
        height={size}
        className={`dark:invert ${className}`}
      />
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      className={`size-6 dark:text-white ${className}`}
      stroke="currentColor"
    >
      <path strokeLinecap={icon.strokeLinecap} strokeLinejoin={icon.strokeLinejoin} d={icon.d} />
    </svg>
  );
};

export default SVGIcon;

