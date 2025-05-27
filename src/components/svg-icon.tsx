import { SVGIcon } from "@/lib/svg";
import Image from "next/image";
import React from "react";

interface SvgIconProps {
  icon: SVGIcon;
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ icon, className = "" }) => {
  if (icon.type === "dataURL") {
    return (
      <Image
        src={icon.dataURL || ''}
        alt={icon.key}
        className={`size-6 dark:invert ${className}`}
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

export default SvgIcon;

