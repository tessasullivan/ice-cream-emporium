import React, { Component } from "react";
import _ from "lodash";
import IceCreamTable from "../IceCreamTable/iceCreamTable";
import { getIceCream, deleteIceCream } from "../../services/fakeFlavorService";
import { getIceCreamTypes } from "../../services/fakeTypeService";
import { paginate } from "../common/paginate";
import Pagination from "../common/pagination";
import ListGroup from "../common/listGroup";
import handsHoldingIceCream from "../../assets/handsHoldingIceCream.jpeg";

class IceCream extends Component {
  state = {
    flavors: [],
    types: [],
    currentPage: 1,
    pageSize: 5,
    sortColumn: { path: "name", order: "asc" }
  };

  componentDidMount() {
    const types = [{ _id: "", name: "All Types" }, ...getIceCreamTypes()];
    this.setState({ flavors: getIceCream(), types });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleDelete = flavor => {
    const flavors = this.state.flavors.filter(f => f._id !== flavor._id);
    this.setState({flavors});
    deleteIceCream(flavor._id);
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
    var imgStyle = {
      transform: "translateY(40px)",
      maxWidth: "250px"
    };
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.types}
              selectedItem={this.state.selectedType}
              onItemSelect={this.handleTypeSelect}
            />
            <img
              style={imgStyle}
              src={handsHoldingIceCream}
              alt="ice cream"
            />
          </div>
          <div className="col">
            <IceCreamTable
              flavors={flavors}
              sortColumn={sortColumn}
              onSort={this.handleSort}
              onDelete={this.handleDelete}
            />
            <Pagination
              itemsCount={totalCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IceCream;
