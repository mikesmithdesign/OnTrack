import React from "react";
import TimeList from "./TimeList";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Times(props) {
  const { startPoint, endPoint } = props;
  return (
    <React.Fragment>
      <Header startPoint={startPoint} endPoint={endPoint} />
      <TimeList startPoint={startPoint} endPoint={endPoint} />
      <Footer />
    </React.Fragment>
  );
}

export default Times;
