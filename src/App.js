import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import MapSection from "./components/MapSection/MapSection";
import PlaceList from "./components/PlaceList/PlaceList";

const App = () => {
  const [autocomplete, setAutocomplete] = useState(null);
  const [coords, setCoords] = useState({ lat: null, lng: null });

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {
    setCoords({
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    });
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({
          lat: latitude,
          lng: longitude,
        });
      }
    );
  });

  return (
    <div>
      <Header onLoad={onLoad} onPlaceChanged={onPlaceChanged} />

      <div className="container">
        <PlaceList />

        <MapSection coords={coords} />
      </div>
    </div>
  );
};

export default App;
