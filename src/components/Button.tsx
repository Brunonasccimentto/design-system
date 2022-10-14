import {clsx} from "clsx"
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    aschild?: Boolean;
}

export function Button({ children, aschild}: ButtonProps){
    
   const Comp = aschild ? Slot : "button"

    return(
        
        <Comp
        className={clsx(
            " px-4 text-white bg-purple-nuzzer hover:bg-dark-purple rounded font-semibold text-md w-96 h-11 transition-colors focus:ring-1 ring-white",

          )}> {children}  </Comp>
    )
}