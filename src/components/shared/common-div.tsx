import { ReactNode } from "react";

export const GappedDiv: React.FC<{ children?: ReactNode, className?: string }> = ({ children, className }) => {
  return (
    <div
      className={`px-4 md:px-16 ${className}`}
    >
      {children}
    </div>
  );
}
