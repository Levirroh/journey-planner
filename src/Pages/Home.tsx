import CompactNavbar from "../Components/CompactNavbar"
import Input from "../Components/Input"

function Home() {
  return (
    <section className="w-screen h-screen bg-gradient-to-br from-blue-600 to-blue-400 relative">
      <div className="pt-6 px-4">
        <Input />
        <Input />
      </div>

      <CompactNavbar />
    </section>
  )
}

export default Home
