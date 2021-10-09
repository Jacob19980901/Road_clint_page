import React, { useState } from "react";
import Logo from "../assets/logo1.png";
import { Link } from "react-router-dom";
import Gamburger from "@material-ui/icons/Reorder";
import "../styles/navbar.css";
const GAMBURGER = document.querySelector(".gamMenu");

function Navbar() {
  const handleCloseGamMenu = () => {
    GAMBURGER.style.display = "none";
    console.log("Close", GAMBURGER);
  };
  const handleOpenGamMenu = () => {
    GAMBURGER.style.display = "flex";
    console.log("Open", GAMBURGER);
  };

  return (
    <div className="fragment">
      <div className="navbar">
        <div className="leftSide">
          <Link className="nav-logo-img" to="/">
            <img src={Logo} alt="logo of organization" />
          </Link>
          <Link to="/" className="nameOffice">
            Tashkilot nomi / Asosiy sahifa
          </Link>
        </div>

        <div className="navMenu">
          <Link to="/table-comp"> Yo'llar ro'yxati </Link>
          <Link to="/about"> Biz haqimizda</Link>
          <Link to="/contact"> Aloqa</Link>
        </div>

        <div className="gamburger">
          <button className="openGamMenu" onClick={handleOpenGamMenu}>
            <Gamburger />
          </button>
          <div className="gamMenu" id="gamMenu">
            <button className="closeGamMenu" onClick={handleCloseGamMenu}>
              ✖
            </button>
            <Link to="/" onClick={handleCloseGamMenu}>
              Asosiy sahifa
            </Link>
            <Link to="/table-comp" onClick={handleCloseGamMenu}>
              Yo'llar ro'yxati
            </Link>
            <Link to="/about" onClick={handleCloseGamMenu}>
              Biz haqimizda
            </Link>
            <Link to="/contact" onClick={handleCloseGamMenu}>
              Aloqa
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
