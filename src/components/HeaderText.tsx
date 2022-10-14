import {clsx} from "clsx"
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface HeaderTextProps {
    size?: "sm" | "md" | "lg";
    children: ReactNode;
    aschild?: Boolean;
}

export function HeaderText({size = "md", children, aschild}: HeaderTextProps){
    
   const Comp = aschild ? Slot : "h2"

    return(
        
        <Comp
        className={clsx("text-black",
         {"text-lg": size === "sm",
          "text-xl": size === "md",
          "text-xxl": size === "lg"}
          )}> {children}  </Comp>
    )
}