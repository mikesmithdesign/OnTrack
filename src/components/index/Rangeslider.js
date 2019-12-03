import React from "react";
import { Range, getTrackBackground } from "react-range";

function Rangeslider(props) {
  const { offset, handleRangeChange } = props;
  return (
    <div
      className="when animated fadeInUp"
      style={{ zIndex: 1, animationDelay: ".45s" }}
    >
      <label htmlFor="">When?</label>
      <Range
        step={1}
        min={0}
        max={120}
        values={offset}
        onChange={values => handleRangeChange(values)}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "4px",
              width: "100%",
              background: getTrackBackground({
                values: offset,
                colors: ["#FF2897", "rgba(255,255,255,.15)"],
                min: 0,
                max: 120
              })
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "100%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px"
              }}
            >
              {offset[0] === 0 ? "Now" : offset[0] + "m"}
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default Rangeslider;
