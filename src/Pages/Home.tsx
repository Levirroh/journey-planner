import { useState } from "react";
import Input from "../Components/Input";
import CompactNavbar from "../Components/CompactNavbar";

function Home() {
  const [destiny, setDestiny] = useState("");
  const [departure, setDeparture] = useState("");

  const showDepartureInput = destiny.trim() !== "";

  return (
    <section className="w-screen h-screen bg-gradient-to-br from-blue-600 to-blue-400 relative">
      <div className="w-full flex flex-col items-center justify-center gap-4 pt-6">
        <Input
          width="w-72"
          height="h-12"
          placeholder="Type your next destiny!"
          onChange={(e) => setDestiny(e.target.value)}
        />

        {showDepartureInput && (
          <Input
            width="w-72"
            height="h-12"
            placeholder="Type from where you are departing!"
            onChange={(e) => setDeparture(e.target.value)}
          />
        )}
      </div>

      <CompactNavbar />
    </section>
  );
}
export default Home
