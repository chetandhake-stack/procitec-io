import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  maxWidth?: "sm" | "md" | "lg";
}

const maxWidthClasses = {
  sm: "max-w-2xl",
  md: "max-w-3xl",
  lg: "max-w-4xl",
} satisfies Record<NonNullable<SectionHeaderProps["maxWidth"]>, string>;

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  maxWidth = "md",
  className,
  ...props
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "space-y-4",
        maxWidthClasses[maxWidth],
        isCentered && "mx-auto text-center",
        className
      )}
      {...props}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold leading-tight text-text-primary sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="text-base leading-7 text-text-secondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
