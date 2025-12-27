import Navbar from "../Components/Navbar"
import CompactNavbar from "../Components/CompactNavbar"
import Feed from "../Components/Feed"
import LogoContainer, { ETypeLogoContainer } from "../Components/LogoContainer"

function Home() {

  return (
    <div>
      <Navbar />
      <section className="w-screen">
        <LogoContainer type={ETypeLogoContainer.smallNoReturn} />
        <Feed />
      </section>
      <CompactNavbar />
    </div>
  )
}

export default Home
