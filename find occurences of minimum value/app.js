// Find the number of occurrences of the minimum value in the list

const minOcc = (arr) => {
  const sortedCopy = [...arr].sort((a, b) => a - b);
  return sortedCopy.filter((item) => item === sortedCopy[0]).length;
};

const arr = [3, 2, 2, 5, 2, 8];

console.log(minOcc(arr));

//! Better way is with math min
const minValue = Math.min(...arr);
console.log(arr.filter((item) => item === minValue).length);
