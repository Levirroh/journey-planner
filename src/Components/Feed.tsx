import { useEffect, useState } from "react";
import FlightContainer from "./FlightContainer";

type FeedProps = {
    destiny?: string
    departure?: string
}

function Feed({ destiny, departure }: FeedProps) {
    const [feed, setFeed] = useState([]);
    useEffect(() => {
        GetFeed();
    }, [destiny, departure]);

    async function GetFeed() {
        try {
            const response = await fetch("http://localhost:8000/flights/getFeed", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    destiny: destiny,
                    departure: departure
                }),
            });

            const feed = await response.json();
            setFeed(feed);
            console.log(feed);
        } catch (err) {
            console.error("Erro:", err);
        }
    }
    return (
        <div className="h-full w-screen bg-transparent flex flex-col items-center">
            {feed.map((flight: any) => (
                <FlightContainer flight={flight} />
            ))}
        </div>
    )
}
export default Feed;