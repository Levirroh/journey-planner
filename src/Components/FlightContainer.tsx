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
    <div className="text-black w-90 h-35 p-4 rounded-lg flex flex-col justify-center items-center bg-gradient-to-br from-gray-300 to-gray-400 shadow-lg">
      <div className="text-center w-[90%] pb-2">
        <h1 className="text-xl text-left">{flight?.title}</h1>
      </div>
      <div className="bg-slate-200 w-[90%] h-[30%] rounded-lg flex justify-center items-center mb-2">
      </div>
      <div className="text-center w-full h-full">
        <div className="flex">
          <p>{flight?.departure} | {flight?.arriving}</p>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{flightContainer}</a>;
  }

  return flightContainer;
}

export default FlightContainer;
