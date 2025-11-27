import axios from "axios";
import Button from "../Components/Button.tsx"

function Welcome() {
  async function insertTestData() {
    try {
      await axios.get("http://localhost:8000/users/login");
    } catch (error) {
    }
  }


  return (
    <div className="h-screen w-screen flex flex-col">

      <button onClick={insertTestData}> inserir dados de teste </button>

      <div className="h-1/2 w-full bg-slate-200 flex justify-center items-center">
        <h1 className="text-4xl font-bold">PacknGo</h1>
      </div>

      <div className="h-1/2 w-full bg-blue-400 flex justify-evenly items-center">
        <div>
          <Button text="Entrar" href="/login" hoverColor="hover:bg-blue-400" />
        </div>
        <div>
          <Button text="Cadastrar" href="/register" hoverColor="hover:bg-blue-400" />
        </div>
      </div>
    </div>
  )
}

export default Welcome
