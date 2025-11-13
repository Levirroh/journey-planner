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
  size?: number
  text: string
  corner?: ELocation
  href?: string
}

function Arrow({
  direction = EDirection.left,
  color = "bg-white",
  size = 15,
  text = "",
  corner = ELocation.rightTop,
  href = "",
}: ArrowProps) {

  const button = (
    <button
      style={{ height: `${size}px`, width: `${size}px` }}
      className={`${color} text-center rounded-2xl px-4 py-2
        hover:border-2 hover:h-20 hover:duration-150 hover:text-white hover:text-2xl
        duration-150 hover:w-40 hover:border-white hover:cursor-pointer flex justify-center
        items-center  


      ${direction === EDirection.up ? "rotate-90" : ""}  **:${direction === EDirection.down ? "-rotate-90" : ""}
      ${direction === EDirection.right ? "rotate-180" : ""}

      
      ${corner == ELocation.leftDown ? "bottom-5  left-5" : ""}  ${corner == ELocation.leftTop ? "left-5  top-5" : ""} 
      ${corner == ELocation.rightDown ? "bottom-5  right-5" : ""}  ${corner == ELocation.rightTop ? "right-5  top-5" : ""}
      `}
    >
      {text && <div>{text}</div>}
    </button>
  );

  if (href) {
    return <a href={href}>{button}</a>;
  }

  return button;
}

export default Arrow
