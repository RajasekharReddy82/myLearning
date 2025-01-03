# JavaScript Code Examples

```javascript
const add = x => x + 2;
const mul = x => x * 2;
const div = x => x / 2;

console.log(pipe(add, mul, div)(3)); // output: 5
console.log(pipe(add, mul, div, mul)(3)); // output: 10

const pipe = (...functions) => (initialValue) => 
  functions.reduce((value, func) => func(value), initialValue);

// Find the highest units in the inventory for each category in the catalog, considering items with the same category but different IDs.
let catalog = [
  { id: 1, title: "obj 01", category: "toys" },
  { id: 2, title: "obj 02", category: "grocery" },
  { id: 3, title: "obj 03", category: "medical" },
  { id: 4, title: "obj 04", category: "grocery" },
  { id: 5, title: "obj 05", category: "grocery" },
  { id: 6, title: "obj 06", category: "toys" },
  { id: 7, title: "obj 07", category: "medical" },
  { id: 8, title: "obj 08", category: "toys" },
  { id: 9, title: "obj 09", category: "toys" },
  { id: 10, title: "obj 10", category: "toys" }
];

let inventory = [
  { item_id: 1, units: 155 },
  { item_id: 2, units: 200 },
  { item_id: 3, units: 150 },
  { item_id: 5, units: 10 },
  { item_id: 9, units: 180 }
];

const newObj = {};
const inventoryMap = {};

inventory.forEach((obj) => {
  inventoryMap[obj.item_id] = obj.units;
});

catalog.forEach((obj) => {
  const units = inventoryMap[obj.id]; 
  if (!newObj[obj.category]) {
    newObj[obj.category] = 0; 
  }
  return newObj[obj.category] += units || 0;
});

console.log(newObj, inventoryMap);
