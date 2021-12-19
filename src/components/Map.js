import {useState} from "react";
import React from "react";
import LocationInfoBox from "./LocationInfoBox";
import ReactMapGL, {Marker} from "react-map-gl";
import {Icon} from "@iconify/react";
import FireIcon from "@iconify/icons-mdi/fire-alert";
import stormIcon from "@iconify/icons-mdi/storm-advisory";

// app.js

const Map = ({eventData, center, zoom}) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 20.5937,
    longitude: 78.9629,
    zoom: 5,
  });

  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      return (
        <Marker
          longitude={ev.geometries[0].coordinates[0]}
          latitude={ev.geometries[0].coordinates[1]}
          onClick={() => alert("Title:" + ev.title)}
        >
          <Icon icon={FireIcon} className="location-icon" />
        </Marker>
      );
    }
    if (ev.categories[0].id === 12) {
      return (
        <Marker
          longitude={ev.geometries[0].coordinates[0]}
          latitude={ev.geometries[0].coordinates[1]}
          onClick={() => alert("Title:" + ev.title)}
        >
          <Icon icon="twemoji:volcano" className="location-icon" />
        </Marker>
      );
    }
    if (ev.categories[0].id === 10) {
      return (
        <Marker
          longitude={ev.geometries[0].coordinates[0]}
          latitude={ev.geometries[0].coordinates[1]}
          onClick={() => alert("Title:" + ev.title)}
        >
          <Icon icon={stormIcon} className="storm-icon" />
        </Marker>
      );
    }
    if (ev.categories[0].id === 15) {
      return (
        <Marker
          longitude={ev.geometries[0].coordinates[0]}
          latitude={ev.geometries[0].coordinates[1]}
          onClick={() => alert("Title:" + ev.title)}
        >
          <Icon icon="openmoji:iceberg" className="location-icon" />
        </Marker>
      );
    }

    return null;
  });

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiMjIxMXNodWJoYW0iLCJhIjoiY2t4Y3hxa2cwNG1rbjJ0bGF0N3NkMHdlZSJ9.WxRRzYWWd9D-xV9tYjDzDw"
        }
        mapStyle={"mapbox://styles/mapbox/streets-v11"}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        {markers}
      </ReactMapGL>

      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 20.5937,
    lng: 78.9629,
  },
  zoom: 6,
};

export default Map;
