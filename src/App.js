import React, { Component } from "react";
import "./App.css";
import Times from "./components/Times";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    startPoint: {
      crs: "EGH",
      location: "Egham"
    },
    endPoint: {
      crs: "WAT",
      location: "London Waterloo"
    }
  };
  render() {
    const { startPoint, endPoint } = this.state;
    return (
      <div className="App">
        <Header startPoint={startPoint} endPoint={endPoint} />
        <Times startPoint={startPoint} endPoint={endPoint} />
      </div>
    );
  }
}

export default App;
