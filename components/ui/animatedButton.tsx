"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { motion, AnimatePresence, useAnimation } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
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
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const [hovered, setHovered] = React.useState<boolean>(false);
    const Comp = asChild ? Slot : "button";

    const controls = useAnimation();
    return (
      <div className="relative overflow-hidden">
        <motion.div
          initial={{
            y: "-100%",
          }}
          animate={controls}
          // style={{ originY: 1 }}
          className={cn(buttonVariants({ variant, size, className }), "absolute inset-0 !bg-[#b00d07]")}
          onMouseLeave={() =>
            controls.start({
              y: [0, "100%", "-100%"],

              transition: { ease: "easeIn", times: [0, 1, 1], duration: 0.3 },
            })
          }
        >
          <button className="flex items-center justify-center gap-2 font-bold " {...props} />
        </motion.div>
        <Comp
          onMouseEnter={() =>
            controls.start({
              y: 0,
              transition: { ease: "easeOut", duration: 0.3 },
            })
          }
          className={cn(buttonVariants({ variant, size, className }), "")}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

AnimatedButton.displayName = "Button";

export { AnimatedButton, buttonVariants };
