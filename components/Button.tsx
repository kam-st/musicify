import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, children, disabled, type = "button", ...props },
  ref
) {
  return (
    <button
      type={type}
      className={cn(
        `w-full rounded-full bg-green-500 border border-transparent p-3 disbled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition`,
        className
      )}
      disabled={disabled}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
