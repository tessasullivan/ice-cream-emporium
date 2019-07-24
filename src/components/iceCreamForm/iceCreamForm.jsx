import React from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { getFlavor, saveIceCream } from "../../services/fakeFlavorService";
import { getIceCreamTypes } from "../../services/fakeTypeService";

class IceCreamForm extends Form {
  state = {
    data: {
      name: "",
      typeId: "",
      amountInStock: "",
      price: ""
    },
    types: [],
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string()
      .required()
      .label("Flavor"),
    typeId: Joi.string()
      .required()
      .label("Type"),
    amountInStock: Joi.number()
      .required()
      .min(0)
      .max(124)
      .label("Amount"),
    price: Joi.number()
      .required()
      .min(1)
      .max(6)
      .label("Price")
  };

  componentDidMount() {
    const types = getIceCreamTypes();
    this.setState({ types });

    // Check to see if we are adding a new flavor
    const flavorId = this.props.match.params.id;
    if (flavorId === "new") return;

    // If we're editing a flavor that doesn't exist, send them to 404 page
    const flavor = getFlavor(flavorId);
    if (!flavor) return this.props.history.replace("/not-found");

    // If we're editing an existing flavor, get the data
    this.setState({ data: this.mapToViewModel(flavor) });

  }

  mapToViewModel(flavor) {
    return {
      _id: flavor._id,
      name: flavor.name,
      typeId: flavor.type._id,
      amountInStock: flavor.amountInStock,
      price: flavor.price
    };
  }

  doSubmit = () => {
    saveIceCream(this.state.data);
    this.props.history.push("/employees");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderSelect("typeId", "Type", this.state.types)}
          {this.renderInput("amountInStock", "Amount", "number")}
          {this.renderInput("price", "Price")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default IceCreamForm;
