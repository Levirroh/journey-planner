import Navbar from "../Components/Navbar"
import CompactNavbar from "../Components/CompactNavbar"
import Arrow from "../Components/Arrow"
import Feed from "../Components/Feed"

function Home() {

  return (
    <div>
      <Navbar />
      <section className="w-screen">
        <div className="h-1/5 flex bg-blue-400 w-full items-center justify-center font-bold text-white relative">
          <h1 className="text-6xl">PacknGo</h1>
        </div>
        <Feed />
      </section>
      <CompactNavbar />
    </div>
  )
}

export default Home
