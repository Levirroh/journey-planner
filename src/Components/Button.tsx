import type { ReactNode } from "react"

type ButtonProps = {
  text?: string
  color?: string
  textColor?: string
  borderColor?: string
  height?: string
  width?: string
  hoverColor?: string
  href?: string
  onClick?: any
  icon?: ReactNode;
  textSize?: string
  hoverTextColor?: string
}

function Button({
  text = "",
  color = "bg-white",
  textColor = "text-black",
  borderColor = "border-white",
  height = "h-15",
  width = "w-25",
  href = "",
  hoverColor = "hover:bg-blue-400",
  onClick = null,
  icon = null,
  textSize = "text-2xl",
  hoverTextColor = "hover:text-white"
}: ButtonProps) {

  const button = (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${color} ${hoverColor} ${height} ${width}
        ${textSize} ${textColor} ${borderColor} ${hoverTextColor}
        px-4 py-2 rounded-2xl outline-0

        text-center flex justify-center items-center
        transition-all duration-200 transform

        hover:scale-[1.25]
        focus:scale-[1.25]
        active:scale-[0.98]

        hover:shadow-lg
        focus:shadow-lg
        shadow-md
        hover:cursor-pointer

        border border-transparent hover:border-white focus:border-white 
      `}
    >
      {text && <div>{text}</div>}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );

  if (href) {
    return <a href={href}>{button}</a>;
  }

  return button;
}

export default Button
