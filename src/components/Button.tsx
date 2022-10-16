import {clsx} from "clsx"
import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    aschild?: Boolean;
}

export function Button({ children, aschild, ...props}: ButtonProps){
    
   const Comp = aschild ? Slot : "button"

    return(
        
        <Comp
        className={clsx(
            " px-4 text-fff bg-purple-nuzzer hover:bg-dark-purple rounded font-semibold text-md w-[400px] h-11 transition-colors focus:ring-1 ring-white",

          )} {...props}> {children}  </Comp>
    )
}