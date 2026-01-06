

export enum ETypeCardInfoFlight {
  discount,
  avaliable,
  trending,
  fare,
}

type CardInfoFlightProps = {
  info?: ETypeCardInfoFlight
}

function CardInfoFlight({
  info = ETypeCardInfoFlight.avaliable
}: CardInfoFlightProps) {

  const cardInfoFlight = (
    <div className={`${info == ETypeCardInfoFlight.avaliable ? "bg-green-600" :
      info == ETypeCardInfoFlight.discount ? "bg-blue-600" :
        info == ETypeCardInfoFlight.trending ? "bg-yellow-600" : "bg-gray-400"}
    rounded-full w-12 h-12 flex items-center justify-center`}>
      <p className="text-white font-bold text-sm">
        {info == ETypeCardInfoFlight.avaliable ? "Avaliable" :
          info == ETypeCardInfoFlight.discount ? "Discount" :
            info == ETypeCardInfoFlight.trending ? "Trending" : "Info"}
      </p>
    </div>
  );

  return cardInfoFlight;
}

export default CardInfoFlight;
