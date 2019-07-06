import React, { Component } from 'react';
import _ from "lodash";
import IceCreamTable from './iceCreamTable';
import { getIceCream } from '../services/fakeFlavorService';
import { getIceCreamTypes } from '../services/fakeTypeService';

class IceCream extends Component {
  state = {
    iceCream: [],
    types: [],
    sortColumn: { path: "name", order: "asc"}
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  
  render() { 
    return ( 

     );
  }
}
 
export default IceCream;