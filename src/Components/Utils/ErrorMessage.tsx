import { useEffect, useState } from "react"

type ErrorMessageProps = {
  trigger: number
  text?: string
  duration?: number
}

function ErrorMessage({
  trigger,
  text = "Erro ao validar dados",
  duration = 3000,
}: ErrorMessageProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (trigger === 0) return

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [trigger, duration])

  if (!visible) return null

  return (
    <div className="absolute self-center">
      <div className="relative bg-red-400 text-white text-md top-1 rounded-2xl p-3">
        <p>{text}</p>
      </div>
    </div>
  )
}
export default ErrorMessage;