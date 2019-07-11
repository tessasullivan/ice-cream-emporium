import React from 'react';
import IceCream from "../IceCreamMain/IceCream";

const Employees = (props) => {
  return ( 
    <div>
      {/* <h2>Manage Ice Cream</h2> */}
      <IceCream currentRouterPath={props.currentRouterPath}/>
    </div>
   );
}
 
export default Employees;