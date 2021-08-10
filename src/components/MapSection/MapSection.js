import React from "react";
import GoogleMapReact from "google-map-react";

import "./MapSection.scss";

const MapSection = ({ coords, setCoords, setBounds }) => {
  const center = {
    lat: coords.lat,
    lng: coords.lng,
  };

  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultZoom={8}
        center={center}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      ></GoogleMapReact>
    </div>
  );
};

export default MapSection;
