import React from "react";
import GoogleMapReact from "google-map-react";

import "./MapSection.scss";

const MapSection = ({ coords }) => {
  const center = {
    lat: coords.lat,
    lng: coords.lng,
  };

  const onChange = (e) => {
    console.log(e);
  };

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultZoom={8}
        center={center}
        onChange={onChange}
      ></GoogleMapReact>
    </div>
  );
};

export default MapSection;
