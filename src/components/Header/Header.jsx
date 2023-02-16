import "./header.css";
import React from "react";

import { logoYouTube, usersImg } from "../constants/constants";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header__top">
          <div className="logo">
            <Link to={"/"}>
              <img src={logoYouTube} width={120} alt="" />
            </Link>
          </div>
          <Search />
          <nav className="navbar">
            <ul className="nav__list">
              <li className="nav__list-item">
                <img src={usersImg} width={50} alt="" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
