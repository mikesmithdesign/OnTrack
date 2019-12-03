import React from "react";
import train from "../layout/train.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="heroContent">
        <h1 className="animated fadeIn">OnTrack</h1>
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
      </div>
    </div>
  );
}

export default Hero;
