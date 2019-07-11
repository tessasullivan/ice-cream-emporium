import React, { Component } from "react";
import { Link } from "react-router-dom";

import Table from "../common/table";

class IceCreamTable extends Component {
  configureTableContent = currentRouterPath => {
    // These columns are the same for patrons and employees
    let columns = [
      { path: "type.name", label: "Type" },
      { path: "amountInStock", label: "Amount" },
      { path: "price", label: "Price" }
    ];

    // If currentRouterPath is employees, enable link to ice cream(for editing), delete, and sell buttons
    if (currentRouterPath === "/employees") {
      columns.unshift({
        path: "name",
        label: "Flavor",
        content: flavor => (
          <Link to={`flavors/${flavor._id}`}>{flavor.name}</Link>
        )
      });
      columns.push(
        {
          key: "sell",
          content: flavor => (
            <button
              onClick={() => this.props.onSell(flavor)}
              className="btn btn-primary btn-sm"
            >
              Sell
            </button>
          )
        },
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
      );
    } else {
      columns.unshift({
        path: "name",
        label: "Flavor"
      });
    }

    return columns;
  };

  render() {
    const { flavors, onSort, sortColumn, currentRouterPath } = this.props;
    return (
      <React.Fragment>
        
        <Table
          columns={this.configureTableContent(currentRouterPath)}
          data={flavors}
          sortColumn={sortColumn}
          onSort={onSort}
        />
      </React.Fragment>
    );
  }
}

export default IceCreamTable;
