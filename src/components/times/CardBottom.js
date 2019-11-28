import React from "react";

function CardBottom(props) {
  const { item } = props;
  return (
    <div className="cardBottom">
      <p>
        <span className="operator">{item.operator} </span> service <br />
        from <span className="location">
          {item.origin[0].locationName}
        </span> to{" "}
        <span className="location">
          {
            item.subsequentCallingPointsList[0].subsequentCallingPoints[
              item.subsequentCallingPointsList[0].subsequentCallingPoints
                .length - 1
            ].locationName
          }
        </span>{" "}
      </p>
      {props.children}
    </div>
  );
}

export default CardBottom;
