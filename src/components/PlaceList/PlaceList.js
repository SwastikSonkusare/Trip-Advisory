import React from "react";

import Card from "../Card/Card";

import "./PlaceList.scss";

const PlaceList = ({ places, setType, setRating }) => {
  return (
    <div className="list">
      <h1 className="list__header">Hotels and Restuarents around you.</h1>
      <div className="list__dropdowns">
        <select
          name="hotels"
          id="hotels"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="hotels">Hotels</option>
          <option value="restaurents">Restaurents</option>
          <option value="attractions">Attractions</option>
        </select>
        <select
          name="rating"
          id="rating"
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value="">All</option>
          <option value="3">Above 3.0</option>
          <option value="4">Above 4.0</option>
          <option value="4.5">Above 4.5</option>
        </select>
      </div>

      <div className="list__card-container">
        {places.length && places.map((place) => <Card place={place} />)}
      </div>
    </div>
  );
};

export default PlaceList;
