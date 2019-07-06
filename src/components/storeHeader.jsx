import React from "react";

const StoreHeader = () => {
  var h1Style = {
    fontFamily: "fantasy",
    color: "darkgreen",
    textAlign: "center",
    margin: "20px 0 30px 0",
  };

  return (
    <React.Fragment>
      <h1 style={h1Style}>Tessa's Ice Cream Emporium</h1>
    </React.Fragment>
  );
};

export default StoreHeader;
