import {Logo, LogoProps} from  "./logo"           //padrao de configuração do storiesbook
import {Meta, StoryObj} from "@storybook/react"


export default {
    title: "Components/Logo",
    component: Logo,
    args: {}
    //argTypes:{size: { options: [], control: { type: "inline-radio"}}
} as Meta<LogoProps>     // o Logoprops é apenas para o intelisense funcionar

export const Default: StoryObj<LogoProps> = {
}
