import CompactNavbar from "../Components/CompactNavbar"
import Input from "../Components/Input"

function Home() {
  return (
    <section className="w-screen h-screen bg-gradient-to-br from-blue-600 to-blue-400 relative">
      <div className="w-full flex flex-col items-center justify-center gap-4 pt-6">
        <Input width="w-72"
          height="h-12"
          placeholder="Type your next destiny!" />
        <Input width="w-72"
          height="h-12"
          placeholder="Type from where you are departing!" />
      </div>

      <CompactNavbar />
    </section>
  )
}

export default Home
