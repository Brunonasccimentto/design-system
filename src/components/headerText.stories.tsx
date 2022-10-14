import { HeaderText, HeaderTextProps } from "./HeaderText"           //padrao de configuração do storiesbook
import {Meta, StoryObj} from "@storybook/react"

export default {
    title: "Components/HeaderText",
    component: HeaderText,
    args: {
        children: "Lorem ipsum dolor sit amet",

    }
    //argTypes:{size: { options: [], control: { type: "inline-radio"}}
} as Meta<HeaderTextProps>     // o textprops é apenas para o intelisense funcionar

export const Default: StoryObj<HeaderTextProps> = {
    args: {
        size: "md",
    }
}

export const small: StoryObj<HeaderTextProps> = {
    args: {
        size: "sm",
    }
}

export const large: StoryObj<HeaderTextProps> = {
    args: {
        size: "lg",
    }
}

export const CustomComponent: StoryObj<HeaderTextProps> = {
    args: {
        aschild: true,
        children: ( 
            <h1>testando</h1>
        )
    }
}