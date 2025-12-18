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

      {/* <button onClick={insertTestData}> inserir dados de teste </button> */}

      <div className="h-6/10 w-full bg-[url('src/Images/background-dark.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-1">
        <div>
          <img src="src/Images/Logo.png" className="h-[250px]" alt="" />
        </div>
        <div className="flex justify-center items-center">
          <h1 className="text-7xl font-bold text-white">Packn</h1>
          <h1 className="text-7xl font-bold text-blue-400">G</h1>
          <img src="src/Images/earth-full.png" className="h-12 w-12 mt-5" />
        </div>
      </div>

      <div className="h-4/10 w-full bg-gradient-to-br from-blue-500 to-blue-400 flex flex-col sm:justify-evenly justify-center gap-15 sm:gap-0 items-center sm:flex-row">
        <div>
          <Button text="Entrar" href="/login" hoverColor="hover:bg-blue-400" height="h-[70px]" width="w-[194px]" />
        </div>
        <div>
          <Button text="Cadastrar" href="/register" hoverColor="hover:bg-blue-400" height="h-[70px]" width="w-[194px]" />
        </div>
      </div>
    </div>
  )
}

export default Welcome
