type ButtonProps = {
  text?: string
  color?: string
  height?: string
  width?: string
  hoverColor?: string
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
  onClick = null,
  icon = ""
}: ButtonProps) {

  const button = (
    <button
      type="button"
      onClick={onClick}
      className={`${color} outline-0  ${hoverColor}  ${height}  ${width} 

      duration-150 rounded-2xl px-4 py-2 

      hover:border-2 hover:h-20 hover:duration-150 hover:text-white hover:text-2xl hover:w-50 hover:border-white hover:cursor-pointer 

      flex justify-center items-center text-center `}
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
