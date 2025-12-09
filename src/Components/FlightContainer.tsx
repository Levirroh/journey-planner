import Flight from "./Classes/Flight";

type FlightContainerProps = {
  flight?: Flight
  href?: string
}

function FlightContainer({
  flight,
  href = "",
}: FlightContainerProps) {

  const flightContainer = (
    <div className="text-black w-85 h-45 p-4 rounded-lg flex flex-col justify-center items-center bg-gradient-to-br from-gray-300 to-gray-400 shadow-lg">
      <div className="bg-slate-200 w-[90%] h-[30%] rounded-lg flex justify-center items-center mb-2">
      </div>
      <div className="w-[90%] h-[60%]">
        <p className="">{flight?.title}</p>
        <p>{flight?.departure}</p>
        <p>{flight?.arriving}</p>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{flightContainer}</a>;
  }

  return flightContainer;
}

export default FlightContainer;
