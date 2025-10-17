type ButtonProps = {
  text: string
  color?: string
  height?: string
  width?: string
  hoverColor?: string
  href?: string
  onClick?: any
}

function Button({ text, color = "bg-white", height = "h-15", width = "w-25", href = "", hoverColor = "bg-blue-500", onClick = null }: ButtonProps) {

  var button = (
    <button className={`${color} hover:${hoverColor} ${height} ${width} text-center rounded-2xl px-4 py-2 hover:border-2 hover:h-20 hover:duration-150 hover:text-white hover:text-2xl duration-150 hover:w-40 hover:border-white hover:cursor-pointer`}>
      {text}
    </button>
  )

  if (href != "") {
    return (
      <a href={href}>{button}</a>
    );
  } else if (onClick != null) {
    return button;
  } else {
    return button;
  }
}

export default Button
