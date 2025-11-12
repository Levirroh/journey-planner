import { useState } from "react";
import Button from "../Components/Button"

function Login() {
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");


  async function Login() {
    try {
      const response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname: nickname,
          password: password,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro no login");
      }

      const data = await response.json();
      console.log("Login bem-sucedido:", data);
    } catch (err) {
      console.error("Erro:", err);
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="h-2/5 flex bg-blue-400 w-full items-center justify-center font-bold text-white text-6xl">
        <h1>PacknGo</h1>
      </div>
      <div className="h-3/5 bg-slate-200 w-full flex flex-col items-center justify-evenly">
        <div className="flex flex-col">
          <label htmlFor="username" className="pl-1 text-lg" id="teste">Email:</label>
          <input name="username" className="bg-slate-300 border-2 border-slate-400 rounded-md p-1 text-slate-800" value={nickname} onChange={(e) => setNickname(e.target.value)}></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="pl-1 text-lg">Senha:</label>
          <input name="password" className="bg-slate-300 border-2 border-slate-400 rounded-md p-1 text-slate-800" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div>
          <Button text="Entrar" color="bg-slate-300" hoverColor="bg-blue-400" onClick={Login} />
        </div>
      </div>
    </div>
  )
}

export default Login
