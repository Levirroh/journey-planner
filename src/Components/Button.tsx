type ButtonProps = {
  text?: string
  color?: string
  height?: string
  width?: string
  hoverColor?: string
  focusColor?: string
  href?: string
  onClick?: any
  icon?: string
}

function Button({
  text = "",
  color = "bg-white",
  height = "h-15",
  width = "w-25",
  href = "",
  hoverColor = "hover:bg-blue-500",
  focusColor = "focus:bg-blue-500",
  onClick = null,
  icon = ""
}: ButtonProps) {

  const button = (
    <button
      type="button"
      onClick={onClick}
      className={`
        ${color} ${hoverColor} ${focusColor} ${height} ${width}
        px-4 py-2 rounded-2xl outline-0

        text-center flex justify-center items-center
        transition-all duration-200 transform

        hover:scale-[1.25]
        focus:scale-[1.25]
        active:scale-[0.98]

        hover:shadow-lg
        focus:shadow-lg
        shadow-md

        border border-transparent hover:border-white focus:border-white 
      `}
    >
      {text && <div>{text}</div>}
      {icon && <img src={icon} alt={icon} />}
    </button>
  );

  if (href) {
    return <a href={href}>{button}</a>;
  }

  return button;
}

export default Button
