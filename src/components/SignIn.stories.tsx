import {Meta, StoryObj} from "@storybook/react"
import { SignIn } from "../pages/signIn"
import {expect} from "@storybook/jest"
import {within, userEvent, waitFor} from "@storybook/testing-library"
import {rest} from "msw"

export default {
    title: "Pages/SignIn",
    component: SignIn,
    args: {},
    parameters:{
        msw:{
            handlers:[
                rest.post("/sessions", (req,res, ctx)=>{
                    return res(ctx.json({message: "Login realizado com sucesso"}))
                })
            ]
        }
    }
} as Meta    


export const Default: StoryObj = {
    play: async ({canvasElement})=>{                  //testando o elemento, o canvas é a propria tela do storybook
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText("type or email address"), "mkj_586@hotmail.com")
        userEvent.type(canvas.getByPlaceholderText("password"), "*****")

        userEvent.click(canvas.getByRole("button"))

        await waitFor(()=>{
            return expect(canvas.getByText("Login realizado")).toBeInTheDocument()
        })
    }}