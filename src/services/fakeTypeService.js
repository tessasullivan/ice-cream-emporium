export const types = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Basic" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Deluxe" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Sorbet" }
];

export function getIceCreamTypes() {
  return types.filter(t => t);
}