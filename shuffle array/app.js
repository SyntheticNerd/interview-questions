// Write a function which shuffles an array

const shuffle = (arr) => {
  return arr
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value);
};

const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

const arr = range(1, 50);

console.log(shuffle(arr));
