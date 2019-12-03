import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Index.css";
import marker from "./marker.svg";
import signpost from "./signpost.svg";
import Hero from "./Hero";
import Dropdown from "./Dropdown";
import Rangeslider from "./Rangeslider";

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
      handleClear,
      offset,
      handleRangeChange
    } = this.props;
    return (
      <React.Fragment>
        <Hero />
        <div className="controls">
          <Dropdown
            location={startPoint}
            icon={marker}
            destinations={destinations}
            handleClose={handleClose}
            handleClick={this.handleClick}
            zIndex={2}
            delay=".25s"
            dataPoint="startPoint"
          />
          <Dropdown
            location={endPoint}
            icon={signpost}
            destinations={destinations}
            handleClose={handleClose}
            handleClick={this.handleClick}
            zIndex={1}
            delay=".35s"
            dataPoint="endPoint"
          />
          <Rangeslider offset={offset} handleRangeChange={handleRangeChange} />
          <div className="buttons">
            <button
              onClick={handleClear}
              className="animated fadeInUp"
              style={{ animationDelay: ".55s" }}
            >
              Clear
            </button>
            <Link
              to={process.env.PUBLIC_URL + "/Times"}
              className="disabled animated fadeInUp"
              style={{ animationDelay: ".6s" }}
            >
              <button>Go</button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index;
