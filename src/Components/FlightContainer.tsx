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
    <div className="w-full h-15">
      <div className="w-[90%] h-7">
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
