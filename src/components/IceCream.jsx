import React, { Component } from "react";
import _ from "lodash";
import IceCreamTable from "./iceCreamTable";
import { getIceCream } from "../services/fakeFlavorService";
import { getIceCreamTypes } from "../services/fakeTypeService";
import { paginate } from "./common/paginate";
import Pagination from "./common/pagination";

class IceCream extends Component {
  state = {
    flavors: [],
    types: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "name", order: "asc" }
  };

  componentDidMount() {
    const types = [{ _id: "", name: "All Types" }, ...getIceCreamTypes()];
    this.setState({ flavors: getIceCream(), types });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleTypeSelect = type => {
    this.setState({ selectedType: type, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  // Get 1 page of flavors based on currentPage, pageSize, and type of ice cream
  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectedType,
      flavors: allFlavors
    } = this.state;

    const filtered =
      selectedType && selectedType._id
        ? allFlavors.filter(i => i.type._id === selectedType._id)
        : allFlavors;

    // _.orderBy sorts a collection (filtered) by the specified column and sort order
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const flavors = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: flavors };
  };

  render() {
    const { sortColumn, pageSize, currentPage } = this.state;
    const { totalCount, data: flavors } = this.getPagedData();

    return (
      <div className="row">
        <div className="col-3" />
        <div className="col">
          <IceCreamTable
            flavors={flavors}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default IceCream;
