import React, { Component } from "react";
import axios from "axios";

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
        `https://api.departureboard.io/api/v2.0/getArrivalsByCRS/${this.props.endPoint.crs}/?apiKey=68eaf87e-6cc1-49ca-9e95-f8f1da42ac99&timeOffset=42&filterStation=${this.props.startPoint.crs}`
      )
      .then(res => {
        console.log(res.data.trainServices);
        this.setState({ arrivals: res.data.trainServices });
      })
      .catch(err => console.log(err));
  }

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
              style={{ animationDelay: `${1.45 + delay * 0.15}s` }}
            >
              <div className="cardTop">
                <div className="times">
                  <div className="departure">
                    {item.etd !== "On time" ? (
                      <span className="delayed">
                        <p>{item.etd}</p>
                        <s>{item.std}</s>
                      </span>
                    ) : (
                      <React.Fragment>
                        <p>{item.std}</p>
                        <s className="fade">{item.std}</s>
                      </React.Fragment>
                    )}
                  </div>
                  <div className="dots"></div>

                  {item.subsequentCallingPointsList[0].subsequentCallingPoints
                    .filter(key => key.crs === endPoint.crs)
                    .map(key => (
                      <div className="arrival" key={item.serviceID}>
                        {key.et !== "On time" ? (
                          <span className="delayed">
                            <p>{key.et}</p>
                            <s>{key.st}</s>
                          </span>
                        ) : (
                          <React.Fragment>
                            <p>{key.st}</p>
                            <s className="fade">{key.st}</s>
                          </React.Fragment>
                        )}
                      </div>
                    ))}
                </div>
                <div className="location">
                  <div className="start">
                    <p>
                      {startPoint.location} <br />
                      <span>
                        {item.platform
                          ? `Platform ${item.platform}`
                          : `Waiting for platform`}
                      </span>
                    </p>
                  </div>
                  <div className="time"></div>
                  <div className="end">
                    <p>
                      {endPoint.location} <br />
                      {arrivals
                        .filter(
                          key =>
                            key.sta ===
                            item.subsequentCallingPointsList[0]
                              .subsequentCallingPoints[
                              item.subsequentCallingPointsList[0]
                                .subsequentCallingPoints.length - 1
                            ].st
                        )
                        .map(key => (
                          <span key={item.serviceID}>
                            {key.platform
                              ? `Platform ${key.platform}`
                              : `Waiting for platform`}
                          </span>
                        ))}
                    </p>
                  </div>
                </div>
              </div>

              <div className="cardBottom">
                <p>
                  <span className="operator">{item.operator} </span> service{" "}
                  <br />
                  from{" "}
                  <span className="location">
                    {item.origin[0].locationName}
                  </span>{" "}
                  to{" "}
                  <span className="location">
                    {
                      item.subsequentCallingPointsList[0]
                        .subsequentCallingPoints[
                        item.subsequentCallingPointsList[0]
                          .subsequentCallingPoints.length - 1
                      ].locationName
                    }
                  </span>{" "}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Times;
