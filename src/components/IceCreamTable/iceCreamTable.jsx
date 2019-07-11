import React, { Component } from "react";
import { Link } from "react-router-dom";

import Table from "../common/table";

class IceCreamTable extends Component {
  columns = [
    {
      path: "name",
      label: "Flavor",
      content: flavor => <Link to={`flavors/${flavor._id}`}>{flavor.name}</Link>
    },
    { path: "type.name", label: "Type" },
    { path: "amountInStock", label: "Amount" },
    { path: "price", label: "Price" },
    {
      key: "delete",
      content: flavor => (
        <button
          onClick={() => this.props.onDelete(flavor)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { flavors, onSort, sortColumn } = this.props;
    return (
      <Table
        columns={this.columns}
        data={flavors}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default IceCreamTable;
