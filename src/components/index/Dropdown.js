import React from "react";

function Dropdown(props) {
  const {
    location,
    icon,
    destinations,
    handleClose,
    handleClick,
    zIndex,
    delay,
    dataPoint
  } = props;
  return (
    <div
      className="dropDownContainer animated fadeInUp"
      style={{ zIndex: zIndex, animationDelay: delay }}
    >
      <div className="locationBox" onClick={handleClick}>
        <p>{location.location}</p> <img src={icon} alt="" />
      </div>
      <ul className="locationList closed">
        {destinations.map(item => (
          <li
            onClick={handleClose}
            key={item.crs}
            data-location={item.location}
            data-crs={item.crs}
            data-point={dataPoint}
          >
            <p>{item.location}</p>
            <p>({item.crs})</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
