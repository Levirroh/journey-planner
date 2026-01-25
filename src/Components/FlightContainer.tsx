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
    <div className="w-4/5 max-w-md rounded-[32px] bg-white shadow-lg overflow-hidden">

      <div className="relative h-44 bg-cover bg-center"
        style={{ backgroundImage: "url(src/Components/Images/berlim.jpg)" }}
      >
        <div className="absolute top-4 left-4">
          <ContainerCardInfoFlight tags={flight?.tags} />
        </div>

        <div className="absolute bottom-3 left-4 text-white">
          <p className="text-sm font-semibold">
            {flight?.departureDate}
          </p>
        </div>
      </div>

      <div className="p-4 space-y-3">

        <div>
          <h1 className="text-lg font-semibold flex items-center gap-2">
            {flight?.departure}
            <PlaneIcon />
            {flight?.arriving}
          </h1>
          <p className="text-sm text-gray-500">
            {flight?.origin?.name} → {flight?.destiny?.name}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-end gap-2">
            <h2 className="text-xl font-bold">
              R$ {flight?.price}
            </h2>

            {flight?.tags?.includes(ETypeCardInfoFlight.discount) && (
              <div className="flex items-center gap-1 text-green-600 text-sm font-semibold">
                <TicketPercent size={16} />
                <span>(-{flight?.discountPercent}%)</span>
              </div>
            )}
          </div>
        </div>

        <SectionDivisor
          tags={flight?.tags}
          fare={flight?.fare}
          avaliableSeats={flight?.remainingSeats?.length}
        />
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>
            {flight?.type} • {flight?.duration}
          </span>

          <img
            src={flight?.brandImage}
            alt={flight?.brand}
            className="h-4 object-contain"
          />
        </div>
        {expanded && (
          <div className="flex gap-2 pt-2">
            <Button
              text="Add to Cart"
              icon={<LuggageIcon color="white" />}
              color="bg-orange-400"
              textColor="text-white"
            />
            <Button
              text="See more!"
              icon={<Armchair color="white" />}
              color="bg-blue-400"
              textColor="text-white"
            />
          </div>
        )}

      </div>
    </div>
  );


  if (href) {
    return <a href={href}>{flightContainer}</a>;
  }

  return flightContainer;
}

export default FlightContainer;
