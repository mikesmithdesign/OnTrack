import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Index.css";
import marker from "./marker.svg";
import signpost from "./signpost.svg";
import train from "../layout/train.svg";

class Index extends Component {
  handleClick = e => {
    e.currentTarget.parentNode
      .querySelector(".locationList")
      .classList.toggle("closed");
  };

  render() {
    const {
      startPoint,
      endPoint,
      destinations,
      handleClose,
      handleClear
    } = this.props;
    return (
      <React.Fragment>
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
        <div className="controls">
          <div
            className="dropDownContainer animated fadeInUp"
            style={{ zIndex: 2 }}
          >
            <div className="locationBox" onClick={this.handleClick}>
              <p>{startPoint.location}</p> <img src={marker} alt="" />
            </div>
            <ul className="locationList closed">
              {destinations.map(item => (
                <li
                  onClick={handleClose}
                  key={item.crs}
                  data-location={item.location}
                  data-crs={item.crs}
                  data-point="startPoint"
                >
                  <p>{item.location}</p>
                  <p>({item.crs})</p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="dropDownContainer animated  fadeInUp"
            style={{ zIndex: 1 }}
          >
            <div className="locationBox" onClick={this.handleClick}>
              {" "}
              <p>{endPoint.location}</p> <img src={signpost} alt="" />
            </div>
            <ul className="locationList closed">
              {destinations.map(item => (
                <li
                  onClick={handleClose}
                  key={item.crs}
                  data-location={item.location}
                  data-crs={item.crs}
                  data-point="endPoint"
                >
                  <p>{item.location}</p>
                  <p>({item.crs})</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="buttons">
            <button onClick={handleClear} className="animated fadeInUp">
              Clear
            </button>
            <Link to="times" className="disabled animated fadeInUp">
              <button>Go</button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
