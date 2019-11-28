import React from "react";

function CallingPoints(props) {
  function search(nameKey, myArray) {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].crs === nameKey) {
        return i + 1;
      }
    }
  }
  const { item } = props;
  return (
    <ul className="callingPoints closed">
      {item.subsequentCallingPointsList[0].subsequentCallingPoints
        .slice(
          0,
          search(
            "CLJ",
            item.subsequentCallingPointsList[0].subsequentCallingPoints
          )
        )
        .map(key => (
          <li key={key.crs}>
            <p>{key.locationName} </p>
            {key.et !== "On time" ? (
              <span className="delayed">
                <p>
                  <s>{key.st}</s> {key.et}
                </p>
              </span>
            ) : (
              <p>{key.st}</p>
            )}
          </li>
        ))}
    </ul>
  );
}

export default CallingPoints;
