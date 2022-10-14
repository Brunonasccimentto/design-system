import {Button, ButtonProps} from  "./Button"           //padrao de configuração do storiesbook
import {Meta, StoryObj} from "@storybook/react"

export default {
    title: "Components/Button",
    component: Button,
    args: {
        children: "enviar",

    }
    //argTypes:{size: { options: [], control: { type: "inline-radio"}}
} as Meta<ButtonProps>     // o Buttonprops é apenas para o intelisense funcionar

export const Default: StoryObj<ButtonProps> = {
    
}
