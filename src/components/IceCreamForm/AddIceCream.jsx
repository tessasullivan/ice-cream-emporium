import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const AddIceCream = props => {
  if (props.currentRouterPath === "/employees") {
    return (
      <Link to="/flavors/new" className="btn btn-add">
        Add Ice Cream
      </Link>
    );
  } else {
    return null;
  }
};

export default AddIceCream;
