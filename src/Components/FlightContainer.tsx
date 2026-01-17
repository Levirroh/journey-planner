import { useState } from "react";
import Flight from "./Classes/Flight";
import ContainerCardInfoFlight from "./ContainerCardInfoFlight";
import { Armchair, LuggageIcon, PlaneIcon, TicketPercent } from "lucide-react";
import { ETypeCardInfoFlight } from "./CardInfoFlight";
import SectionDivisor from "./Utils/SectionDivisor";
import Button from "./Button";

type FlightContainerProps = {
  flight?: Flight
  href?: string
}

function FlightContainer({
  flight,
  href = "",
}: FlightContainerProps) {
  const [expanded, setExpanded] = useState(false);

  function toggleExpanded() {
    setExpanded(!expanded);
  }

  flight!.remainingSeats = flight?.seats?.filter(seat => seat.user?.user_name !== undefined) || [];

  const flightContainer = (
    <div className="border-2 border-white h-34 w-4/5 rounded-lg bg-slate-200">
      <div className="w-full h-2/3">
        <div className={`bg-[${flight?.image}] w-full h-full bg-cover bg-center rounded-t-lg`}>
          <div>
            <ContainerCardInfoFlight tags={flight?.tags} />
          </div>
          <div>
            <h1>{flight?.departureDate}</h1>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1>{flight?.departure} <PlaneIcon /> {flight?.arriving}</h1>
          <h2>{flight?.departure} - {flight?.arriving}</h2>
        </div>
        <div className="w-full h-2 bg-gray-300">
          <div>
            <h2>
              {flight?.price}
            </h2>
            {flight?.tags?.filter(tag => tag === ETypeCardInfoFlight.discount).length! > 0 && (
              <div className="bg-green-400">
                <h2 className="text-green-700">(-{flight?.discountPercent}%)</h2>
                <TicketPercent color="green" />
              </div>
            )}
          </div>
          <SectionDivisor tags={flight?.tags} fare={flight?.fare} avaliableSeats={flight?.remainingSeats?.length} />
          {expanded && (
            <div>
              <Button text="Add to Cart" icon={<LuggageIcon color="white" />} color="bg-orange-400" textColor="text-white" />
              <Button text="See more!" icon={<Armchair color="white" />} color="bg-blue-400" textColor="text-white" />
            </div>
          )}
          <div>
            {!expanded && (
              <div>

              </div>
            )}
            <div>
              <h2>{flight?.type} • {flight?.duration} • <img src={flight?.brandImage} alt={flight?.brand} /></h2>
            </div>
          </div>
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
