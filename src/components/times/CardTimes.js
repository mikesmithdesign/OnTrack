import React from "react";

function CardTimes(props) {
  const { delay, endPoint, item } = props;
  return (
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
      <div className="dots">
        <ul>
          <li
            className="animated fadeInDown"
            style={{ animationDelay: `${0.5 + delay * 0.15}s` }}
          ></li>
          <li
            className="animated fadeInDown"
            style={{ animationDelay: `${0.55 + delay * 0.15}s` }}
          ></li>
          <li
            className="animated fadeInDown"
            style={{ animationDelay: `${0.6 + delay * 0.15}s` }}
          ></li>
          <li
            className="animated fadeInDown"
            style={{ animationDelay: `${0.65 + delay * 0.15}s` }}
          ></li>
          <li
            className="animated fadeInDown"
            style={{ animationDelay: `${0.7 + delay * 0.15}s` }}
          ></li>
        </ul>
      </div>
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
  );
}

export default CardTimes;
