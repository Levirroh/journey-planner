import axios from "axios";
import Button from "../Components/Button.tsx"
import LogoContainer from "../Components/LogoContainer.tsx";

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

      <LogoContainer />

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
