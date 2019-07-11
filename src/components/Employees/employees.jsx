import React from "react";
import IceCream from "../IceCreamMain/IceCream";

const Employees = props => {
  return (
    <React.Fragment>
      <IceCream currentRouterPath={props.currentRouterPath} />
    </React.Fragment>
  );
};

export default Employees;
