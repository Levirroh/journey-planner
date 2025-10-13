import Button from "../Components/Button"

function Login() {

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <div className="h-2/5 bg-blue-400 w-full">
        <h1>PacknGo</h1>    
      </div>
      <div className="h-3/5 bg-slate-200 w-full flex flex-col items-center justify-evenly">
        <div className="flex flex-col">
          <label htmlFor="username" className="pl-1 text-lg">Email:</label>
          <input name="username" className="bg-slate-300 border-2 border-slate-400 rounded-md p-1"></input>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="pl-1 text-lg">Senha:</label>
          <input name="password" className="bg-slate-300 border-2 border-slate-400 rounded-md p-1"></input>
        </div>
        <div>
          <Button text="Entrar" color="bg-slate-300" hoverColor="bg-blue-400"/>    
        </div>
      </div>
    </div>
  )
}

export default Login
