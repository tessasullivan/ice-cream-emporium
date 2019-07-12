import React from "react";

const filterIceCream = ({onFilter, currentRouterPath}) => {
  if (currentRouterPath === "/employees") {
    const quantity = 25;

    return (
      <div>
        <form onSubmit={onFilter(quantity)} >
          <select>
            <option value="All">Entire Inventory</option>
            <option value={quantity}>Less than {quantity} pints</option>
          </select>
        </form>
      </div>
    );
  } else return null;
};

export default filterIceCream;
