//Sort the array of numbers

const arr = [3, 5, 1, 2];

console.log([...arr].sort((a, b) => a - b));

const arr2 = [
  { title: "HP", author: "JK" },
  { title: "HP", author: "HP" },
  { title: "HP", author: "JR" },
];

console.log([...arr2].sort((a, b) => a.author - b.author));
