import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `flex w-full rounded-md bg-neutral-700 border vorder-transparent px-3 py-3 test-sm file:border-0 file:bg-transparent file:font-medium placeholder:text-neutral-400 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none`,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      ></input>
    );
  }
);

Input.displayName = "Input";
export default Input;
