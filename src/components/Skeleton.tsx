import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function Skeleton({
  variant = "text",
  width,
  height,
  className,
  ...props
}: SkeletonProps) {
  const baseStyles = "bg-gray-200 dark:bg-gray-700 animate-pulse";

  const variants = {
    text: "h-4 w-full rounded",
    circular: "rounded-full",
    rectangular: "rounded-md",
  };

  const classes = twMerge(baseStyles, variants[variant], className);

  const defaultDimensions = {
    text: { width: "100%", height: "1em" },
    circular: { width: "2.5rem", height: "2.5rem" },
    rectangular: { width: "100%", height: "200px" },
  };

  const style = {
    width: width ?? defaultDimensions[variant].width,
    height: height ?? defaultDimensions[variant].height,
  };

  return <div className={classes} style={style} {...props} />;
}
