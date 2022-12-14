import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { Button } from "../components/Button";
import { CheckBox } from "../components/checkbox";
import { Logo } from "../components/logo";
import { TextInput } from "../components/textInput";
import {Text} from "../components/text"
import { FormEvent, useState } from "react";
import axios from "axios";

export function SignIn(){

  const [userLogged, setUserLogged] = useState(false)

 async function handleClick(e: FormEvent){
    e.preventDefault();

   await axios.post("/sessions", {
    email: "teste@teste.com",
    password: "123456",
   })

    setUserLogged(true)
  }

    return(
        <div className=" w-screen h-screen flex items-center justify-center text-white flex-col bg-deep-blue">
        <header className="flex flex-col text-gray items-center gap-4 mb-8">
          <Logo/>
          <Text> "Faça login para ter acesso ao conteudo"</Text>
         
        </header>
        

        <form className="flex gap-4 flex-col">
          {userLogged? <Text> Login realizado</Text> : ""}

          <label htmlFor="email" className="">
            <Text className="font-semibold">Endereço de e-mail:</Text>
            <TextInput.Root children={<> <TextInput.Icon><AiOutlineMail className=" w-6 h-6 text-gray ml-3"/></TextInput.Icon> <TextInput.Input placeholder="type or email address" type={"email"}/> </>}></TextInput.Root>
          </label>

          <label htmlFor="password" className="">
            <Text className="font-semibold">Senha:</Text>
            <TextInput.Root children={<> <TextInput.Icon><AiOutlineLock className=" w-6 h-6 text-gray ml-3"/></TextInput.Icon> <TextInput.Input placeholder="password" type={"password"}/> </>}></TextInput.Root>
          </label>

        </form>

        <label className="flex items-center mt-6 mb-6 gap-4 -ml-[115px]">
          <CheckBox/>
          <Text>Lembre-se de mim por 30 dias </Text>
        </label>
        

        <Button type="submit" onClick={handleClick}> Entrar </Button>

        <footer className=" flex flex-col items-center gap-3 text-gray mt-4 underline cursor-pointer ">
          <Text size="sm" className="hover:text-white">Esqueceu sua senha? </Text>
          <Text size="sm" className="hover:text-white"> Não possui conta? Crie uma agora!</Text>
        </footer>
       
       
    </div>
    )
}