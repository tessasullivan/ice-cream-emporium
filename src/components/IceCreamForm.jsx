import React, { Component } from "react";

class IceCreamForm extends Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <div className="row">
            <div className="col-1">
              <select>
                <option name="type" value="basic">
                  Basic
                </option>
                <option name="type" value="deluxe">
                  Deluxe
                </option>
                <option name="type" value="sorbet">
                  Sorbet
                </option>
              </select>
            </div>
            <div className="col-2">
          <input type="text" placeholder="Flavor" id="flavor"/>

            </div>
            <div className="col-2">

          <input type="text" placeholder="Price" id="price"/>
            </div>
            <div className="col-2">

          <button className="btn btn-primary btn-sm">Add</button>
            </div>
          </div>
          
        </form>
      </React.Fragment>
    );
  }
}

export default IceCreamForm;
