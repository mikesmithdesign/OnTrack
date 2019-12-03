import React, { Component } from "react";
import "./App.css";
import Index from "./components/index/Index";
import Times from "./components/times/Times";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  state = {
    startPoint: {
      crs: "",
      location: "From"
    },
    endPoint: {
      crs: "",
      location: "To"
    },
    destinations: [
      { crs: "EGH", location: "Egham" },
      { crs: "SNS", location: "Staines" },
      { crs: "CLJ", location: "Clapham Junction" },
      { crs: "WAT", location: "London Waterloo" },
      { crs: "YAL", location: "Yalding" }
    ],
    offset: [20]
  };
  handleClose = e => {
    e.currentTarget.parentNode.classList.add("closed");
    e.currentTarget.parentNode.parentNode.classList.add("selected");
    var point = e.currentTarget.getAttribute("data-point");

    if (point === "startPoint") {
      this.setState({
        startPoint: Object.assign({}, this.state.startPoint, {
          crs: e.currentTarget.getAttribute("data-crs"),
          location: e.currentTarget.getAttribute("data-location")
        })
      });
    } else {
      this.setState({
        endPoint: Object.assign({}, this.state.endPoint, {
          crs: e.currentTarget.getAttribute("data-crs"),
          location: e.currentTarget.getAttribute("data-location")
        })
      });
    }
  };

  handleClear = () => {
    this.setState({
      startPoint: Object.assign({}, this.state.startPoint, {
        crs: "",
        location: "From"
      }),
      endPoint: Object.assign({}, this.state.endPoint, {
        crs: "",
        location: "To"
      })
    });

    document
      .querySelectorAll(".dropDownContainer.selected")
      .forEach(function(element) {
        element.classList.remove("selected");
      });
  };

  componentDidUpdate() {
    if (
      this.state.startPoint.crs !== "" &&
      this.state.endPoint.crs !== "" &&
      document.querySelector("a").classList.contains("disabled")
    ) {
      document.querySelector("a.disabled").classList.remove("disabled");
    }
  }

  handleRangeChange = values => {
    this.setState({
      offset: values
    });
    console.log(this.state.offset);
  };

  render() {
    const { startPoint, endPoint, destinations, offset } = this.state;
    return (
      <div className="App">
        <Router>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            render={props => (
              <Index
                {...props}
                startPoint={startPoint}
                endPoint={endPoint}
                offset={offset}
                destinations={destinations}
                handleClose={this.handleClose}
                handleClear={this.handleClear}
                handleRangeChange={this.handleRangeChange}
              />
            )}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + "/Times"}
            render={props => (
              <Times
                {...props}
                startPoint={startPoint}
                endPoint={endPoint}
                offset={offset}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}

export default App;
