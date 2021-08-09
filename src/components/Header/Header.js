import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import logo from "../../images/logo-bookmark.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="brand" className="header__logo"></img>

      <div className="header__container">
        <input
          className="header__input"
          type="text"
          placeholder="Search for any places..."
        ></input>
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
