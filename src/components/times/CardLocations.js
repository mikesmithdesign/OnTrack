import React from "react";

function CardLocations(props) {
  function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].crs === nameKey) {
        return myArray[i];
      }
    }
  }

  const { item, arrivals, startPoint, endPoint } = props;
  return (
    <div className="location">
      <div className="start">
        <p>
          {startPoint.crs} <br />
          <span>
            {item.platform ? `Platform ${item.platform}` : `Platform --`}
          </span>
        </p>
      </div>
      <div className="time">
        <p>
          {isNaN(
            (new Date(
              "01/01/2007 " +
                item.subsequentCallingPointsList[0].subsequentCallingPoints
                  .filter(key => key.crs === endPoint.crs)
                  .map(key =>
                    (function() {
                      switch (key.et) {
                        case "On time":
                          return key.st;
                        default:
                          return key.et;
                      }
                    })()
                  )
            ).getTime() -
              new Date(
                "01/01/2007 " +
                  (function() {
                    switch (item.etd) {
                      case "On time":
                        return item.std;
                      default:
                        return item.etd;
                    }
                  })()
              ).getTime()) /
              1000 /
              60
          )
            ? "NA"
            : (new Date(
                "01/01/2007 " +
                  item.subsequentCallingPointsList[0].subsequentCallingPoints
                    .filter(key => key.crs === endPoint.crs)
                    .map(key =>
                      (function() {
                        switch (key.et) {
                          case "On time":
                            return key.st;
                          default:
                            return key.et;
                        }
                      })()
                    )
              ).getTime() -
                new Date(
                  "01/01/2007 " +
                    (function() {
                      switch (item.etd) {
                        case "On time":
                          return item.std;
                        default:
                          return item.etd;
                      }
                    })()
                ).getTime()) /
              1000 /
              60}
          m
        </p>
      </div>
      <div className="end">
        <p>
          {endPoint.crs} <br />
          {arrivals
            .filter(
              key =>
                key.sta ===
                  search(
                    `${endPoint.crs}`,
                    item.subsequentCallingPointsList[0].subsequentCallingPoints
                  ).st &&
                key.origin[0].locationName === item.origin[0].locationName
            )
            .map(key => (
              <span key={item.serviceID}>
                {key.platform ? `Platform ${key.platform}` : `Platform --`}
              </span>
            ))}
        </p>
      </div>
    </div>
  );
}

export default CardLocations;
