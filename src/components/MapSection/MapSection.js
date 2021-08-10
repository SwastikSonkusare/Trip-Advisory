import React from "react";
import GoogleMapReact from "google-map-react";

import mapStyles from "./mapStyles";

import "./MapSection.scss";

const MapSection = ({
  coords,
  setCoords,
  setBounds,
  places,
  setChildClicked,
}) => {
  const center = {
    lat: coords.lat,
    lng: coords.lng,
  };


  return (
    <div className="map-container">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        center={center}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length &&
          places.map((p, i) => (
            <div
              className="marker"
              lat={Number(p.latitude)}
              lng={Number(p.longitude)}
              key={i}
            >
              <div className="marker__container">
                <small>{p.name}</small>
                <img
                  className="marker__image"
                  src={
                    p.photo
                      ? p.photo.images.large.url
                      : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                  }
                  alt="small"
                ></img>
                <span>Rating: {p.rating}</span>
              </div>
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default MapSection;
