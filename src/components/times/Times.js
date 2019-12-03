import React from "react";
import TimeList from "./TimeList";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Times(props) {
  const { startPoint, endPoint, offset } = props;
  return (
    <React.Fragment>
      <Header startPoint={startPoint} endPoint={endPoint} />
      <TimeList startPoint={startPoint} endPoint={endPoint} offset={offset} />
      <Footer />
    </React.Fragment>
  );
}

export default Times;
