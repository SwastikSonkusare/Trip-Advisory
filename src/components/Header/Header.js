import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Autocomplete } from "@react-google-maps/api";

import logo from "../../images/logo-bookmark.svg";

import "./Header.scss";

const Header = ({ onLoad, onPlaceChanged }) => {
  return (
    <header className="header">
      <img src={logo} alt="brand" className="header__logo"></img>

      <div className="header__container">
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <input type="text" className="header__input"></input>
        </Autocomplete>
        <FontAwesomeIcon
          icon={faSearch}
          size="1x"
          className="header__search-icon"
        />
      </div>
    </header>
  );
};

export default Header;
