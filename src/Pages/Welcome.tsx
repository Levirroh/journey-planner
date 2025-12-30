import Button from "../Components/Button.tsx"
import LogoContainer, { ETypeLogoContainer } from "../Components/LogoContainer.tsx";

function Welcome() {

  return (
    <div className="h-screen w-screen flex flex-col">
      <LogoContainer type={ETypeLogoContainer.bigNoReturn} />
      <div className="h-4/10 w-full bg-gradient-to-br from-blue-500 to-blue-400 flex flex-col sm:justify-evenly justify-center gap-15 sm:gap-0 items-center sm:flex-row">
        <div>
          <Button text="Enter" href="/login" hoverColor="hover:bg-zinc-800" hoverTextColor="hover:text-white" height="h-[70px]" width="w-[194px]" />
        </div>
        <div>
          <Button text="Register" href="/register" hoverColor="hover:bg-zinc-800" hoverTextColor="hover:text-white" height="h-[70px]" width="w-[194px]" />
        </div>
      </div>
    </div>
  )
}

export default Welcome
