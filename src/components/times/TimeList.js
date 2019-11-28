import React, { Component } from "react";
import axios from "axios";
import "./Times.css";
import CardTimes from "./CardTimes";
import CardLocations from "./CardLocations";
import CallingPoints from "./CallingPoints";
import CardBottom from "./CardBottom";

class Times extends Component {
  state = {
    trains: [],
    arrivals: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.departureboard.io/api/v2.0/getDeparturesByCRS/${this.props.startPoint.crs}/?apiKey=68eaf87e-6cc1-49ca-9e95-f8f1da42ac99&filterStation=${this.props.endPoint.crs}&numServices=5`
      )
      .then(res => {
        console.log(res.data.trainServices);
        this.setState({ trains: res.data.trainServices });
      })
      .catch(err => console.log(err));

    axios
      .get(
        `https://api.departureboard.io/api/v2.0/getArrivalsByCRS/${this.props.endPoint.crs}/?apiKey=68eaf87e-6cc1-49ca-9e95-f8f1da42ac99&timeOffset=20&filterStation=${this.props.startPoint.crs}&numServices=5`
      )
      .then(res => {
        console.log(res.data.trainServices);
        this.setState({ arrivals: res.data.trainServices });
      })
      .catch(err => console.log(err));
  }

  handleClick = e => {
    e.target.classList.toggle("spin");
    e.target.parentNode.parentNode
      .querySelector(".callingPoints")
      .classList.toggle("closed");
  };

  render() {
    const { trains, arrivals } = this.state;
    const { startPoint, endPoint } = this.props;

    return (
      <div className="timesContainer">
        <ul className="trainTimes">
          {trains.map((item, delay) => (
            <li
              key={item.serviceID}
              className="animated fadeInUp"
              style={{ animationDelay: `${0.4 + delay * 0.15}s` }}
            >
              <div className="cardTop">
                <CardTimes item={item} delay={delay} endPoint={endPoint} />
                <CardLocations
                  item={item}
                  arrivals={arrivals}
                  endPoint={endPoint}
                  startPoint={startPoint}
                />
                <CallingPoints item={item} />
              </div>
              <CardBottom item={item}>
                <button onClick={this.handleClick}>+</button>
              </CardBottom>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Times;
