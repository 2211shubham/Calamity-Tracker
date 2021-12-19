import {useState, useEffect} from "react";
import Map from "./components/Map";
import Header from "./components/Header";
import Loader from "./components/Loader";
import "mapbox-gl/dist/mapbox-gl.css";
function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const {events} = await res.json();
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
    // console.log(eventData);
  }, []);
  return (
    <div>
      <Header></Header>
      {!loading ? <Map eventData={eventData} /> : <Loader></Loader>}
    </div>
  );
}

export default App;
