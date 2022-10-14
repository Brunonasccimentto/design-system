import {TextInput, TextInputProps, textInputRootProps} from  "./textInput"           //padrao de configuração do storiesbook
import {Meta, StoryObj} from "@storybook/react"
import { AiOutlineMail } from "react-icons/ai";

export default {
    title: "Components/TextInput",
    component: TextInput.Root,
    args: {
        children: (
            <>
                <TextInput.Icon><AiOutlineMail className=" w-6 h-6 text-gray ml-3"/></TextInput.Icon>
                <TextInput.Input placeholder="type or email address"/>
            </>
            
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }}
        }
       
    //argTypes:{size: { options: [], control: { type: "inline-radio"}}
} as Meta<textInputRootProps>     // o TextInputprops é apenas para o intelisense funcionar

export const Default: StoryObj<textInputRootProps> = {}
export const WithoutIcon: StoryObj<textInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder="type or email address"/>
}
}
