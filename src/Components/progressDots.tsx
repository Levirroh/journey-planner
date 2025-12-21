type ProgressDotsProps = {
  activeDots: number
  total: number
}

function ProgressDots({
  activeDots,
  total
}: ProgressDotsProps) {

  return (
    <div className="flex items-center">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-4 w-4 mx-2 rounded-full transition-colors
            ${index < activeDots ? "bg-white" : "bg-zinc-800"}
          `}
        />
      ))}
    </div>
  )
}

export default ProgressDots;
