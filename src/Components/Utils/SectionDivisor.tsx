import type { ETypeCardInfoFlight } from "../CardInfoFlight";
import type { ETypeFare } from "../Classes/Flight";

type SectionDivisorProps = {
  tags?: ETypeCardInfoFlight[]
  fare?: ETypeFare,
  avaliableSeats?: number,
}

function SectionDivisor({ tags = [], fare, avaliableSeats }: SectionDivisorProps) {

  return (
    <div className="self-center bg-slate-300 p-[1px] w-full">
      {tags.map((tag: any) => (
        <div>
        </div>
      ))}
      {fare}
      {avaliableSeats}
    </div>
  )
}
export default SectionDivisor;