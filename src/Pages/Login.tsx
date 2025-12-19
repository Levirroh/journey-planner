import { useState } from "react";
import axios from "axios";
import Button from "../Components/Button"
import Arrow from "../Components/Arrow"
import Input, { ETypeInput } from "../Components/Input"
import LogoContainer from "../Components/LogoContainer";

function Login() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);


  async function Login() {
    try {
      const response = await axios.post("http://localhost:8000/users/login", {
        nickname,
        password
      });

      localStorage.setItem("user", response.data.user);
      window.location.href = "/home";
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <LogoContainer />
      <div className="h-3/5 bg-gradient-to-br from-blue-500 to-blue-400 w-full flex flex-col items-center justify-evenly">
        {error &&
          (
            <div className="absolute top-169 left-150">
              <div className="relative bg-red-400 text-white text-md rounded-2xl p-3" >
                <div className="absolute top-11 left-4 w-0 h-0 border-t-[8px] border-t-red-400 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent">
                </div>
                <p>Usuário ou senha inválidos.</p>
              </div>
            </div>
          )}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <Input
              text="Username or Email:"
              placeholder="jhondoe"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>


          <div className="flex flex-col">
            <Input
              text="Password:"
              placeholder="********"
              value={password}
              type={ETypeInput.password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Button text="Entrar" width="w-45" color="bg-zinc-800" textColor="text-white" borderColor="border-white" hoverColor="hover:bg-zinc-800" onClick={Login} />
        </div>
      </div>
    </div>
  )
}

export default Login
