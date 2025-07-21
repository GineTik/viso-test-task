import { cn } from "@/shared/lib/utils";
import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-[700px] w-full mx-auto px-1", className)}>
      {children}
    </div>
  );
}
