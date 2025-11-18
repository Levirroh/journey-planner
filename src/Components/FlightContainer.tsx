type FlightContainerProps = {
  flight?: []
  href?: string
}

function FlightContainer({
  flight = null,
  href = "",
}: FlightContainerProps) {

  const flightContainer = (
    <div>
      <p></p>
    </div>
  );

  if (href) {
    return <a href={href}>{flightContainer}</a>;
  }

  return flightContainer;
}

export default FlightContainer;
