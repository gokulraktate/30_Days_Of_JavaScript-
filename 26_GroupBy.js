Array.prototype.groupBy = function(fn) {
  const result = {};

  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const key = fn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
};

// Example:
const array = [
  { id: "1" },
  { id: "1" },
  { id: "2" }
];

const grouped = array.groupBy(function(item) {
  return item.id;
});

console.log(grouped);
// Expected output:
// {
//   "1": [{ id: "1" }, { id: "1" }],
//   "2": [{ id: "2" }]
// }
