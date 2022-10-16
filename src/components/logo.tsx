
import {clsx} from "clsx"
import Nuzzer from "../images/nuzzer.png"


export interface LogoProps {
    width?: "sm" | "md" | "lg";
}

export function Logo({width = "md"}: LogoProps){
    return(
        
        <img src={Nuzzer} alt="nuzzer logo" style={{"width": "400px", "height": "68.05"}}></img>
       
    )
}