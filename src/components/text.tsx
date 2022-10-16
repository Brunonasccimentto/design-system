import {clsx} from "clsx"
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TextProps {
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    aschild?: Boolean;
    className?: String;
}

export function Text({size = "md", children, aschild, className}: TextProps){
    
   const Comp = aschild ? Slot : "span"

    return( 

        <Comp
        className={clsx("",
         {
          "text-sm": size === "sm",
          "text-md": size === "md",
          "text-lg": size === "lg"
        },
           className,
          )}> {children}  </Comp>
    )
}