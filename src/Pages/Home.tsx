import { use, useState } from "react";
import Input, { ETypeInput } from "../Components/Input";
import CompactNavbar from "../Components/CompactNavbar";
import axios from "axios";
import Feed from "../Components/Feed";

function Home() {
  const [destiny, setDestiny] = useState("");
  const [departure, setDeparture] = useState("");
  const [places, setPlaces] = useState([]);
  const [error, setError] = useState(false);

  const showDepartureInput = destiny.trim() !== "";

  async function GetPlaces() {
    try {
      const response = await axios.get("http://localhost:8000/geo/getPlaces", {
      });
      console.log(response.data);
      setPlaces(response.data);
    } catch (error) {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }

  useState(() => {
    GetPlaces();
  });



  return (
    <section className="w-screen h-screen bg-gradient-to-br from-blue-600 to-blue-400 relative">
      <div className="w-full flex flex-col items-center justify-center gap-4 pt-6">
        <Input
          type={ETypeInput.input}
          options={places}
          width="w-72"
          height="h-12"
          placeholder="Type your next destiny!"
          onChange={(e) => setDestiny(e.target.value)}
        />

        {showDepartureInput && (
          <Input
            type={ETypeInput.input}
            options={places}
            width="w-72"
            height="h-12"
            placeholder="Type from where you are departing!"
            onChange={(e) => setDeparture(e.target.value)}
          />
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        {places != null && (
          <Feed destiny={destiny} departure={departure} />
        )}
      </div>
      <CompactNavbar />
    </section>
  );
}
export default Home
