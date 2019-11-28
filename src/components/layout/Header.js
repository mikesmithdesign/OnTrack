import React from "react";
import train from "./train.svg";
import "./Header.css";

function Header(props) {
  const { startPoint, endPoint } = props;
  return (
    <header>
      <div className="headerLocation">
        <p className="animated fadeIn">{startPoint.location}</p>
        <p className="animated fadeIn">{endPoint.location}</p>
      </div>
      <div className="headerCrs">
        <h2 className="animated fadeIn">{startPoint.crs}</h2>
        <div className="graphicContainer">
          <ul>
            <li className="animated fadeInDown"></li>
            <li className="animated fadeInDown"></li>
            <li className="animated fadeInDown"></li>
          </ul>
          <img src={train} alt="" className="animated fadeInDown" />
          <ul>
            <li className="animated fadeInDown"></li>
            <li className="animated fadeInDown"></li>
            <li className="animated fadeInDown"></li>
          </ul>
        </div>
        <h2 className="animated fadeIn">{endPoint.crs}</h2>
      </div>
    </header>
  );
}

export default Header;
