import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
}

export function Button({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center justify-center rounded-md font-medium transition-colors
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50
        ${
          variant === "primary"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : variant === "secondary"
            ? "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100"
            : "border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        }
        ${
          size === "small"
            ? "h-8 px-3 text-sm"
            : size === "large"
            ? "h-12 px-6 text-lg"
            : "h-10 px-4 text-base"
        }
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
