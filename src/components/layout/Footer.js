import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="disabled fadeIn ">
        <Link to={process.env.PUBLIC_URL + "/"}>
          <button>Back</button>
        </Link>
      </footer>
    );
  }
}

export default Footer;
