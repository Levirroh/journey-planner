import CompactNavbar from "../Components/CompactNavbar"
import Input from "../Components/Input"

function Home() {

  return (
    <div>
      <section className="w-screen h-screen bg-gradient-to-br from-blue-600 to-blue-400">
        <div>
          <Input />
          <Input />
        </div>
        <div>
          <CompactNavbar />
        </div>
      </section>
    </div>
  )
}

export default Home
