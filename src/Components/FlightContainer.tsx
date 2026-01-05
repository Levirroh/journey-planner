import CardInfoFlight from "./CardInfoFlight";
import Flight from "./Classes/Flight";
import ContainerCardInfoFlight from "./ContainerCardInfoFlight";

type FlightContainerProps = {
  flight?: Flight
  href?: string
}

function FlightContainer({
  flight,
  href = "",
}: FlightContainerProps) {

  flight!.remainingSeats = flight?.seats?.filter(seat => seat.user?.user_name !== undefined) || [];

  const flightContainer = (
    <div className="border-2 border-white h-34 w-4/5 rounded-lg bg-slate-200">
      <div className="w-full h-2/3">
        <div className={`bg-[${flight?.image}] w-full h-full bg-cover bg-center rounded-t-lg`}>
          <div>
            <ContainerCardInfoFlight tags={flight?.tags} />
          </div>
          <div>
            <h1>{flight?.departure}</h1>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>{flight?.title}</h1>
          <h2>{flight?.departure} - {flight?.arriving}</h2>
        </div>
        <div className="w-full h-2 bg-gray-300">
          <h2>
            {flight?.remainingSeats.length} Seats Left
            Tarifa light
            Direct
          </h2>
        </div>
        <div>
          <img src="" alt="" />Plane Image
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
