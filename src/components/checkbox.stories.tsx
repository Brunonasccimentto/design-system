import {CheckBox, CheckBoxProps} from  "./checkbox"          //padrao de configuração do storiesbook
import {Meta, StoryObj} from "@storybook/react"
import { Text } from "./text"

export default {
    title: "Components/CheckBox",
    component: CheckBox,
    args: {},
    //argTypes:{size: { options: [], control: { type: "inline-radio"}}
    decorators: [
       (Story) =>{
        return(
            <div className="flex items-center gap-4">
                {Story()}
                <Text size="sm"> Lembrar-me de mim por 30 dias</Text>
            </div>
        )
       }
        ],
} as Meta<CheckBoxProps>     // o CheckBoxprops é apenas para o intelisense funcionar

export const Default: StoryObj<CheckBoxProps> = {
    
}
