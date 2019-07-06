import React, {Component} from 'react';
 

class IceCreamForm extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <form>
          <input type="text" placeholder="Flavor"/>
          <select>
            <option name="type" value="basic">Basic</option>
          </select>
          <input type="text" placeholder="Price"/>
        </form>
      </React.Fragment>
     );
  }
}
 
export default IceCreamForm;