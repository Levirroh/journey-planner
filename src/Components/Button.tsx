type ButtonProps = {
  text: string
  color?: string
  height?: string
  width?: string
  hoverColor?: string
  href?: string
}

function Button({ text, color = "bg-white", height = "h-15", width = "w-25", hoverColor = "bg-blue-500", href = "" }: ButtonProps) {

  if(href != ""){
    return(
      <a href={href}>
        <button className={`${color} text-center ${height} ${width} rounded-2xl px-4 py-2 hover:${hoverColor} hover:border-2 hover:h-20 hover:duration-150 hover:text-white hover:text-2xl duration-150 hover:w-40 hover:border-white hover:cursor-pointer`}>
          {text}
        </button>
      </a>
    );
  } else {
    return(
      <button className={`${color} text-center ${height} ${width} rounded-2xl px-4 py-2 hover:${hoverColor} hover:border-2 hover:h-20 hover:duration-150 hover:text-white hover:text-2xl duration-150 hover:w-40 hover:border-white hover:cursor-pointer`}>
          {text}
      </button>
    );
  }
}

export default Button
