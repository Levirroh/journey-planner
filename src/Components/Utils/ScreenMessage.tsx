import { useEffect, useState } from "react"

export enum ETypeScreenMessage {
  ERROR,
  SUCCESS,
  WARNING,
}

type ScreenMessageProps = {
  trigger: number
  type?: ETypeScreenMessage
  text?: string
  duration?: number
}

function ScreenMessage({
  trigger,
  type = ETypeScreenMessage.ERROR,
  text = "Erro ao validar dados",
  duration = 3000,
}: ScreenMessageProps) {
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
      <div className={`relative ${type === ETypeScreenMessage.ERROR ? "bg-red-400" : type === ETypeScreenMessage.SUCCESS ? "bg-green-500" : "bg-orange-400 "} text-white text-md top-1 rounded-2xl p-3`}>
        <p>{text}</p>
      </div>
    </div>
  )
}
export default ScreenMessage;