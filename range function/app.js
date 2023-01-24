// Write a function which implements a range
const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

console.log(range(1, 50));
