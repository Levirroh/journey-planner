import { CircleUserRound, Plane, Settings } from "lucide-react"

function CompactNavbar() {
    return (
        <div className="fixed bottom-0 left-0 w-full h-28 md:hidden z-50">
            <div className="absolute bottom-[-30] left-1/2 -translate-x-1/2 w-[150%] h-115 bg-gradient-to-br from-gray-200 to-white rounded-[100%]" />
            <div className="absolute bottom-[-30] left-1/2 -translate-x-1/2 w-[150%] h-115 border-8 border-gray-300 rounded-[100%] bg-transparent">
            </div>


            <div className="absolute bottom-8 left-0 w-full flex justify-between px-4">
                <button className="w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-gray-300 bg-gradient-to-br from-blue-500 to-blue-400
                ">
                    <CircleUserRound size={60} strokeWidth={1} />
                </button>
                <button className="w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-gray-300 bg-gradient-to-bl from-blue-500 to-blue-400
                ">
                    <Settings size={72} strokeWidth={1} className="rotate-20" />
                </button>
            </div>

            <button
                className="
          absolute
          bottom-16
          left-1/2
          -translate-x-1/2
          w-24 h-24
          rounded-full
          bg-blue-500
          flex items-center justify-center
          text-white
          shadow-xl
          border-4 border-gray-300
          bg-gradient-to-b from-blue-500 to-blue-400
        "
            >
                <Plane size={60} strokeWidth={1} />
            </button>
        </div>
    )
}

export default CompactNavbar
