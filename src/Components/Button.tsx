type ButtonProps = {
  text: string
  color?: string
}

function Button({ text, color = "bg-white" }: ButtonProps) {
  return (
    <button className={`${color} text-center border-none rounded-2xl px-4 py-2`}>
      {text}
    </button>
  )
}

export default Button
