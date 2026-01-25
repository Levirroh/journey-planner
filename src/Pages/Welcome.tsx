import axios from "axios";
import Button from "../Components/Button.tsx"
import LogoContainer, { ETypeLogoContainer } from "../Components/LogoContainer.tsx";

function Welcome() {

  async function insertTestData() {
    try {
      await axios.get("http://localhost:8000/general/insertBaseData");
    } catch (error) {
    }
  }

  async function dropBaseData() {
    try {
      await axios.delete("http://localhost:8000/general/dropBaseData");
    } catch (error) {
    }
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <button onClick={insertTestData}> inserir dados de teste </button>
      <button onClick={dropBaseData}> deletar dados de teste </button>
      <LogoContainer type={ETypeLogoContainer.bigNoReturn} />
      <div className="h-4/10 w-full bg-gradient-to-br from-blue-500 to-blue-400 flex flex-col sm:justify-evenly justify-center gap-15 sm:gap-0 items-center sm:flex-row">
        <div>
          <Button text="Login" href="/login" hoverColor="hover:bg-zinc-800" hoverTextColor="hover:text-white" height="h-[70px]" width="w-[194px]" />
        </div>
        <div>
          <Button text="Register" href="/register" hoverColor="hover:bg-zinc-800" hoverTextColor="hover:text-white" height="h-[70px]" width="w-[194px]" />
        </div>
      </div>
    </div>
  )
}

export default Welcome
