import React from "react";
import { Link } from "react-router-dom";
import './addIceCream.css';

const AddIceCream = (props) => {
  if (props.currentRouterPath === '/employees') {
    return (
      <Link
        to="/flavors/new"
        className="btn addBtn"
        style={{ marginBottom: 20 }}
      >
        Add Ice Cream
      </Link>
    );
  } else {
    return null;
  }

};

export default AddIceCream;
