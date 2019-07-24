import React, { Component } from "react";
import _ from "lodash";
import IceCreamTable from "../iceCreamTable/iceCreamTable";
import { getAllFlavors, deleteIceCream } from "../../services/fakeFlavorService";
import { getIceCreamTypes } from "../../services/fakeTypeService";
import { paginate } from "../common/paginate";
import Pagination from "../common/pagination";
import ListGroup from "../common/listGroup";
import AddIceCream from '../iceCreamForm/addIceCream';
// import FilterIceCream from '../filterIceCream/filterIceCream';
import handsHoldingIceCream from "../../assets/handsHoldingIceCream.jpeg";

class IceCream extends Component {
  state = {
    flavors: [],
    types: [],
    currentPage: 1,
    pageSize: 10,
    selectedType: null,
    sortColumn: { path: "name", order: "asc" }
  };

  componentDidMount() {
    const types = [{ _id: "", name: "All Types" }, ...getIceCreamTypes()];
    this.setState({ flavors: getAllFlavors(), types });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleDelete = flavor => {
    const flavors = this.state.flavors.filter(f => f._id !== flavor._id);
    this.setState({flavors});
    deleteIceCream(flavor._id);
  };

  handleSale = (flavor) => {
    let flavors = this.state.flavors.filter(f => f._id !== flavor._id);
    flavor.amountInStock--;
    flavors.push(flavor);
    this.setState({flavors});
  }

  handleTypeSelect = type => {
    this.setState({ selectedType: type, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleFilter = quantity => {
    let flavors;
    if (quantity === 'All') {
      flavors = getAllFlavors();
    } else {
      flavors = this.state.flavors.filter(flavor => flavor.amountInStock <= quantity);
    }
    this.setState({flavors});
  }
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
          <AddIceCream currentRouterPath={this.props.currentRouterPath}/>
          {/* <FilterIceCream currentRouterPath={this.props.currentRouterPath} onFilter={this.handleFilter}/> */}
            <IceCreamTable
              flavors={flavors}
              sortColumn={sortColumn}
              onSort={this.handleSort}
              onDelete={this.handleDelete}
              onSell={this.handleSale}
              currentRouterPath={this.props.currentRouterPath}
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
