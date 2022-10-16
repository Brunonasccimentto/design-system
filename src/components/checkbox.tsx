import * as CheckboxRadix from "@radix-ui/react-checkbox";
import { AiOutlineCheck } from "react-icons/ai";


export interface CheckBoxProps {
    
}

export function CheckBox({}: CheckBoxProps){

    return(
        
        <CheckboxRadix.Root className="w-8 h-8 bg-white rounded">
            <CheckboxRadix.Indicator asChild>
                <AiOutlineCheck className="w-5 h-4 m-auto font-bold text-black"/>
            </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
    )
}