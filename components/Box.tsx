import { cn } from "@/lib/utils";

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

function Box({ children, className }: BoxProps) {
  return (
    <div className={cn(`bg-neutral-900 rounded-lg h-fit w-full`, className)}>
      {children}
    </div>
  );
}

export default Box;
