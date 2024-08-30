import React from "react";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

const primaryButtonClasses = cn(
  "group relative w-auto flex items-center justify-center gap-2 overflow-hidden text-sm font-semibold tracking-tighter",
  "transform-gpu ring-offset-current transition-all duration-300 ease-out text-card",
  "bg-primary hover:ring-2 hover:ring-primary hover:ring-offset-2",
  "px-8 py-5"
);

const secondaryButtonClasses = cn(
  "group relative w-auto flex items-center justify-center gap-2 overflow-hidden text-sm font-semibold tracking-tighter",
  "transform-gpu ring-offset-current transition-all duration-300 ease-out",
  "bg-white text-primary border-2 border-primary",
  "hover:bg-primary hover:text-white hover:ring-2 hover:ring-primary hover:ring-offset-2",
  "px-8 py-5"
);

interface StyledButtonProps {
  isLoading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const StyledButton = React.forwardRef<
  HTMLButtonElement,
  StyledButtonProps
>(
  (
    {
      isLoading = false,
      children,
      onClick,
      disabled = false,
      variant = "primary",
      type = "button",
      className,
    },
    ref
  ) => {
    const buttonClasses = cn(
      variant === "secondary" ? secondaryButtonClasses : primaryButtonClasses,
      className
    );

    return (
      <Button
        ref={ref}
        type={type}
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled || isLoading}
      >
        <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
        {isLoading && <Loader className="mr-2 h-4 w-4 animate-spin" />}
        {!isLoading && <span className="flex items-center">{children}</span>}
      </Button>
    );
  }
);

StyledButton.displayName = "StyledButton";
