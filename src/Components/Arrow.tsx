import { ArrowBigUpDash } from "lucide-react"

enum EDirection {
  up = "up",
  down = "down",
  left = "left",
  right = "right"
}

enum ELocation {
  leftDown = "leftDown",
  leftTop = "leftTop",
  rightDown = "rightDown",
  rightTop = "rightTop"
}

type ArrowProps = {
  direction?: EDirection
  color?: string
  size?: string
  text: string
  corner?: ELocation
  href?: string
}

function Arrow({
  direction = EDirection.left,
  color = "bg-white",
  size = "15",
  text = "",
  corner = ELocation.leftTop,
  href = "",
}: ArrowProps) {

  const arrowInput = (
    <button
      className={`
        p-2 flex items-center justify-center border-1 border-white rounded-2xl 
        absolute w-20 h-15 hover:h-16 hover:w-30 hover:duration-150 duration-150 cursor-pointer

        ${direction === EDirection.up ? "rotate-90" : ""}
        ${direction === EDirection.down ? "-rotate-90" : ""}
        ${direction === EDirection.right ? "rotate-180" : ""}

        ${corner === ELocation.leftDown ? "bottom-5 left-5" : ""}
        ${corner === ELocation.leftTop ? "left-5 top-5" : ""}
        ${corner === ELocation.rightDown ? "bottom-5 right-5" : ""}
        ${corner === ELocation.rightTop ? "right-5 top-5" : ""}
      `}
    >
      <ArrowBigUpDash color="white" />
    </button>
  );

  if (href) return <a href={href}>{arrowInput}</a>;
  return arrowInput;
}

export default Arrow;
