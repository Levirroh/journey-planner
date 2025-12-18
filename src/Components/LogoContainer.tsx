
enum ETypeLogoContainer {
  big = "full",
  small = "small",
  bigNoReturn = "fullNoReturn"
}

type logoContainerProps = {
  type?: ETypeLogoContainer
}


function LogoContainer({ type = ETypeLogoContainer.big }: logoContainerProps) {


  const logoContainer = (
    <div className={`${type == ETypeLogoContainer.big ? "h-6/10" : type == ETypeLogoContainer.small ? "h-2/10" : "h-6/10"} w-full bg-[url('src/Images/background-dark.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-1`}>
      {type === ETypeLogoContainer.big && (
        <div>
          <img src="src/Images/Logo.png" className="h-[250px]" alt="" />
        </div>
      )}
      <div className="flex justify-center items-center">
        <h1 className="text-7xl font-bold text-white">Packn</h1>
        <h1 className="text-7xl font-bold text-blue-400">G</h1>
        <img src="src/Images/earth-full.png" className="h-12 w-12 mt-5" />
      </div>
    </div>
  );

  return logoContainer;
}

export default LogoContainer;
