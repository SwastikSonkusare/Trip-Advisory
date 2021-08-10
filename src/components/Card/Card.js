import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

import "./Card.scss";

const Card = ({ place }) => {
  return (
    <div className="card">
      <img
        className="card__image"
        src={place.photo.images.large.url}
        alt=""
      ></img>

      <h3 className="card__heading">{place.name}</h3>
      <div className="card__rating-box">
        <span className="card__rating">Rating: {Number(place.rating)}</span>
        <span className="card__reviews">
          Reviews: {Number(place.num_reviews)}
        </span>
      </div>

      <div className="card__price">
        <span>Price:</span>
        {place.price}
      </div>

      <div className="card__ranking">
        <span>Ranking:</span>
        {place.ranking}
      </div>

      <div className="card__awards">
        {place?.awards?.map((award) => (
          <div className="card__awards-container">
            <img
              className="card__awards-image"
              src={award.images.small}
              alt="award"
            ></img>
            <h4 className="card__awards-heading">{award.display_name}</h4>
          </div>
        ))}
      </div>

      <div className="card__chip">
        {place?.cuisine?.map(({ name }) => (
          <span key={name}>{name}</span>
        ))}
      </div>

      {place?.address && (
        <div className="card__address">
          <>
            <FontAwesomeIcon icon={faMap} size="1x" />
            <h5>{place.address}</h5>
          </>
        </div>
      )}

      {place.phone && (
        <div className="card__address">
          <>
            <FontAwesomeIcon icon={faPhone} size="1x" />
            <h5>{place.phone}</h5>
          </>
        </div>
      )}

      <div className="card__actions">
        <button
          className="card__btn"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisory
        </button>
        <button
          className="card__btn"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </button>
      </div>
    </div>
  );
};

export default Card;
