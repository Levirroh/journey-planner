import CardInfoFlight, { ETypeCardInfoFlight } from "./CardInfoFlight";

type ContainerCardInfoFlightProps = {
  expanded?: boolean
  tags?: ETypeCardInfoFlight[]
}

function ContainerCardInfoFlight({
  expanded = false,
  tags = [ETypeCardInfoFlight.avaliable]
}: ContainerCardInfoFlightProps) {

  if (tags === null || tags.length === 0) {
    return null
  }

  const cardInfoFlight = (
    <div className={`rounded-4xl w-12 h-12 flex items-center justify-center`}>
      {expanded ? (
        tags.map((tag, index) => (
          <div key={index} className="m-1">
            <CardInfoFlight info={tag} />
          </div>
        ))
      ) : <CardInfoFlight info={tags[0]} />
      }

    </div>
  );

  return cardInfoFlight;
}

export default ContainerCardInfoFlight;
