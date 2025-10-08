import Button from "../Components/Button.tsx"

function Welcome() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="h-1/2 w-full bg-slate-200 flex justify-center items-center">
        <h1 className="text-4xl font-bold">PacknGo</h1>
      </div>

      <div className="h-1/2 w-full bg-blue-400 flex justify-evenly items-center">
        <div>
          <Button text="Entrar" />
        </div>
        <div>
          <Button text="Cadastrar" />
        </div>
      </div>
    </div>
  )
}

export default Welcome
