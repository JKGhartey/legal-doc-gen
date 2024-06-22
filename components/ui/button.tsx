// components/ui/button.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-[50px]",
  {
    variants: {
      variant: {
        default: "bg-TealGreen text-white hover:bg-TealGreen/90",
        destructive: "bg-red-600 text-white hover:bg-red-600/90",
        outline:
          "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-700",
        secondary: "bg-SlateGray text-white hover:bg-SlateGray/80",
        ghost: "bg-transparent text-TealGreen hover:bg-TealGreen/10",
        link: "text-TealGreen underline hover:no-underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  type?: "button" | "submit" | "reset"; // Restrict to valid HTML button types
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, type = "button", ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        type={type} // Ensure type is valid and defaults to "button"
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props} // Spread additional props carefully
      >
        {props.children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
