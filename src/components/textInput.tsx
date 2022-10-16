import { InputHTMLAttributes, ReactNode } from "react"


export interface textInputRootProps {
    children: ReactNode
}

function textInputRoot(props: textInputRootProps){
    return(

        <div className=" bg-white w-[400px] h-10 rounded-xl focus-within:ring-2 ring-dark-purple flex items-center gap-4">
            {props.children}
        </div>
    )
    
}

interface textInputIconProps {
    children: ReactNode
}

function textInputIcon(props:textInputIconProps){
    return(
    
        <>
         {props.children}
        </>    
    )
}

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
    //importante sempre passar antes na interface
}

function Input(props: TextInputProps){

    return(
        <input {...props}
            className="bg-transparent flex-1 text-black text-md outline-none bg-white"
            /> 
    )
        

}

export const TextInput = {
    Root: textInputRoot,
    Input: Input,
    Icon: textInputIcon,
}