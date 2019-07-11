import React, { Component } from "react";
import { Link } from "react-router-dom";

import Table from "../common/table";

class IceCreamTable extends Component {
  // columns = [
  //   {
  //     path: "name",
  //     label: "Flavor",
  //     content: flavor => <Link to={`flavors/${flavor._id}`}>{flavor.name}</Link>
  //   },
  //   { path: "type.name", label: "Type" },
  //   { path: "amountInStock", label: "Amount" },
  //   { path: "price", label: "Price" },
  //   {
  //     key: "delete",
  //     content: flavor => (
  //       <button
  //         onClick={() => this.props.onDelete(flavor)}
  //         className="btn btn-danger btn-sm"
  //       >
  //         Delete
  //       </button>
  //     )
  //   }
  // ];

  configureTableContent = currentRouterPath => {
    // These columns are the same for patrons and employees
    let columns = [
      { path: "type.name", label: "Type" },
      { path: "amountInStock", label: "Amount" },
      { path: "price", label: "Price" }
    ];
    console.log(currentRouterPath);
    // If currentRouterPath is employees, enable link to ice cream(for editing), delete, and sell buttons
    if (currentRouterPath === "/employees") {
      columns.unshift({
        path: "name",
        label: "Flavor",
        content: flavor => (
          <Link to={`flavors/${flavor._id}`}>{flavor.name}</Link>
        )
      });
      columns.push({
        key: "delete",
        content: flavor => (
          <button
            onClick={() => this.props.onDelete(flavor)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        )
      });
    } else {
      columns.unshift({
        path: "name",
        label: "Flavor"
      });
    }

    console.log(columns);
    return columns;
  };

  render() {
    const { flavors, onSort, sortColumn, currentRouterPath } = this.props;
    // this.configureTableContent();
    return (
      <Table
        // columns={this.columns}
        columns={this.configureTableContent(currentRouterPath)}
        data={flavors}
        sortColumn={sortColumn}
        onSort={onSort}
      />
    );
  }
}

export default IceCreamTable;
