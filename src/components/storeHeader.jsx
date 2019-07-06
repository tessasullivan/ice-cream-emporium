import React from "react";
import handsHoldingIceCream from "../assets/handsHoldingIceCream.jpeg";

const StoreHeader = () => {
  var h1Style = {
    fontFamily: "fantasy",
    color: "darkgreen",
    textAlign: "center",
    margin: "20px 0 30px 0",
    // transform: "translateX(260px) translateY(-550px)",
  };
  // var imgStyle = {
  //   marginBottom: "20px",
  //   transform: "translateX(250px)"
  // };
  return (
    <React.Fragment>
      {/* <img
        style={imgStyle}
        src={handsHoldingIceCream}
        alt="Picture of ice cream"
      /> */}
      <h1 style={h1Style}>Tessa's Ice Cream Emporium</h1>
    </React.Fragment>
  );
};

export default StoreHeader;
