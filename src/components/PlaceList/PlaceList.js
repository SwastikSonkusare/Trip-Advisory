import React, { useEffect, createRef, useState } from "react";

import Card from "../Card/Card";

import "./PlaceList.scss";

const PlaceList = ({ places, setType, setRating, childClicked }) => {
  const [elRefs, setElRefs] = useState([]);

  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );

    console.log(elRefs);
  }, [places]);

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
          <option value="restaurants">Restaurants</option>
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
        {places.length &&
          places.map((place, i) => (
            <Card
              place={place}
              key={i}
              selected={Number(childClicked) === i}
              refProp={elRefs[i]}
            />
          ))}
      </div>
    </div>
  );
};

export default PlaceList;
