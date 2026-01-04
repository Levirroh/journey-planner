import { useState } from "react";
import axios from "axios";
import Button from "../Components/Button"
import Input, { ETypeInput } from "../Components/Input"
import LogoContainer from "../Components/LogoContainer";
import ScreenMessage from "../Components/Utils/ScreenMessage";

function Login() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [errorTrigger, setErrorTrigger] = useState(0);



  async function Login() {
    try {
      const response = await axios.post("http://localhost:8000/users/login", {
        nickname,
        password
      });

      localStorage.setItem("user", response.data.user);
      window.location.href = "/home";
    } catch (error) {
      setErrorTrigger(prev => prev + 1);
    }
  }
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <LogoContainer />
      <div className="h-3/5 bg-gradient-to-br from-blue-500 to-blue-400 w-full flex flex-col items-center justify-evenly">
        <ScreenMessage text="Please, fill all the fields!" trigger={errorTrigger} />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col">
            <Input
              width="w-66"
              height="h-12"
              text="Full Name"
              placeholder="JTCO"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <Input
              width="w-66"
              height="h-12"
              type={ETypeInput.password}
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Button text="Enter" width="w-45" color="bg-zinc-800" textColor="text-white" borderColor="border-white" hoverColor="hover:bg-zinc-800" onClick={Login} />
        </div>
      </div>
    </div>
  )
}

export default Login
