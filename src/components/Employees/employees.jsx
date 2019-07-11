import React from "react";
import { Link } from "react-router-dom";
import IceCream from "../IceCreamMain/IceCream";
import "./employees.css";

const Employees = props => {
  return (
    <div>
      <IceCream currentRouterPath={props.currentRouterPath} />
      <Link
        to="/flavors/new"
        className="btn"
        style={{ marginBottom: 20, float: "right"}}
      >
        Add Ice Cream
      </Link>
      {/* <h2>Manage Ice Cream</h2> */}
    </div>
  );
};

export default Employees;
