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
    <div>
      <p>{flight?.title}</p>
    </div>
  );

  if (href) {
    return <a href={href}>{flightContainer}</a>;
  }

  return flightContainer;
}

export default FlightContainer;
