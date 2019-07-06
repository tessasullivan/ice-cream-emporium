// import * as typeAPI from './fakeTypeService';

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
export function getIceCream() {
  return flavors;
}