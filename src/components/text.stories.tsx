import {Text, TextProps} from "./text"            //padrao de configuração do storiesbook
import {Meta, StoryObj} from "@storybook/react"

export default {
    title: "Components/Text",
    component: Text,
    args: {
        children: "Lorem ipsum dolor sit amet",

    }
    //argTypes:{size: { options: [], control: { type: "inline-radio"}}
} as Meta<TextProps>     // o textprops é apenas para o intelisense funcionar

export const Default: StoryObj<TextProps> = {
    args: {
        size: "md",
    }
}

export const small: StoryObj<TextProps> = {
    args: {
        size: "sm",
    }
}

export const large: StoryObj<TextProps> = {
    args: {
        size: "lg",
    }
}

// export const CustomComponent: StoryObj<TextProps> = {
//     args: {
//         aschild: true,
//         children: ( 
//             <h1>testando</h1>
//         )
//     }
// }