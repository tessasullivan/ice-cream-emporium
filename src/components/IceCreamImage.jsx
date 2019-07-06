import React from "react";
import handsHoldingIceCream from "../assets/handsHoldingIceCream.jpeg";

const IceCreamImage = () => {
  var imgStyle = {
    transform: "translateY(-100px)",
    maxWidth: "250px",
    // position: "fixed",
    // left: "200px"
  };
  return (
    <img
      style={imgStyle}
      src={handsHoldingIceCream}
      alt="Picture of ice cream"
    />
  );
};

export default IceCreamImage;
