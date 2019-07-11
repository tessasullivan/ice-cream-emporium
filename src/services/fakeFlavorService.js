import * as typesAPI from './fakeTypeService';

const flavors = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Vanilla",
    type: {_id: "5b21ca3eeb7f6fbccd471818", name: "Basic"},
    amountInStock: 124,
    price: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Chocolate",
    type: {_id: "5b21ca3eeb7f6fbccd471818", name: "Basic"},
    amountInStock: 124,
    price: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Strawberry",
    type: {_id: "5b21ca3eeb7f6fbccd471818", name: "Basic"},
    amountInStock: 120,
    price: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471901",
    name: "Banana Pudding",
    type: {  _id: "5b21ca3eeb7f6fbccd471814", name: "Deluxe" },
    amountInStock: 124,
    price: 5.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471902",
    name: "Rocky Road",
    type: {  _id: "5b21ca3eeb7f6fbccd471814", name: "Deluxe" },
    amountInStock: 100,
    price: 5.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471903",
    name: "Salted Caramel Toffee",
    type: {  _id: "5b21ca3eeb7f6fbccd471814", name: "Deluxe" },
    amountInStock: 124, 
    price: 5.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471904",
    name: "Almond Amaretto",
    type: {  _id: "5b21ca3eeb7f6fbccd471814", name: "Deluxe" },
    amountInStock: 105, 
    price: 5.5
  },
    {
    _id: "5b21ca3eeb7f6fbccd472001",
    name: "Pineapple",
    type: {  _id: "5b21ca3eeb7f6fbccd471820", name: "Sorbet" },
    amountInStock: 110, 
    price: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd472002",
    name: "Peach",
    type: {  _id: "5b21ca3eeb7f6fbccd471820", name: "Sorbet" },
    amountInStock: 124, 
    price: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd472003",
    name: "Lemon",
    type: {  _id: "5b21ca3eeb7f6fbccd471820", name: "Sorbet" },
    amountInStock: 124, 
    price: 4
  },
  {
    _id: "5b21ca3eeb7f6fbccd472004",
    name: "Coconut",
    type: {  _id: "5b21ca3eeb7f6fbccd471820", name: "Sorbet" },
    amountInStock: 124, 
    price: 4
  },
];
export function getAllFlavors() {
  return flavors;
}

export function getFlavor(id) {
  return flavors.find( f => f._id === id);
}

export function saveIceCream(flavor){
  let flavorInDb = flavors.find(f => f._id === flavor._id) || {};
  flavorInDb.name = flavor.name;
  flavorInDb.type = typesAPI.types.find(t => t._id === flavor.typeId);
  flavorInDb.amountInStock = flavor.amountInStock;
  flavorInDb.price = flavor.price;

  // If the flavor isn't in the above table, add it
  if (!flavorInDb._id) {
    flavorInDb._id = Date.now().toString();
    flavors.push(flavorInDb);

  return flavorInDb;
  }
}

export function deleteIceCream(id) {
  let flavorInDb = flavors.find(f => f._id === id);
  flavors.splice(flavors.indexOf(flavorInDb), 1);
  return flavorInDb;
}