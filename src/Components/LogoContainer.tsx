import Arrow from "./Arrow";

export enum ETypeLogoContainer {
  big,
  small,
  bigNoReturn,
  smallNoReturn
}

type logoContainerProps = {
  type?: ETypeLogoContainer
}


function LogoContainer({ type = ETypeLogoContainer.big }: logoContainerProps) {

  var logoContainer;

  if (type == ETypeLogoContainer.big || type == ETypeLogoContainer.bigNoReturn) {
    logoContainer = (
      <div className={`h-6/10 relative w-full bg-[url('src/Images/background-dark.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-1`}>
        {type === ETypeLogoContainer.big && (
          <div>
            <Arrow href="/" />
            <img src="src/Images/Logo.png" className="h-[250px]" alt="" />
          </div>
        )}
        {type === ETypeLogoContainer.bigNoReturn && (
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
  } else {
    logoContainer = (
      <div className={`h-3/10 relative w-full bg-[url('src/Images/background-dark.png')] bg-no-repeat bg-cover flex flex-col justify-center items-center gap-1`}>
        {type === ETypeLogoContainer.small && (
          <div>
            <Arrow href="/" size="w-13 h-10" />
            <img src="src/Images/Logo.png" className="h-[75px] absolute top-1 right-2" alt="" />
          </div>
        )}

        <div className="flex justify-center items-center">
          <h1 className="text-7xl font-bold text-white">Packn</h1>
          <h1 className="text-7xl font-bold text-blue-400">G</h1>
          <img src="src/Images/earth-full.png" className="h-12 w-12 mt-5" />
        </div>
      </div>
    )
  };
  return logoContainer;
}

export default LogoContainer;
