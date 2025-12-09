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
    <div className="w-85 h-45">
      <div className="w-full h-full p-4 rounded-lg flex flex-col justify-center items-center bg-gradient-to-br from-gray-300 to-gray-400 text-white shadow-lg">
        <p>{flight?.title}</p>
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
