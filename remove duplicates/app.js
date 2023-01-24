// Remove duplicates from an array
// Need to test this implementations might work with object unlike the other two
//! NOPE doesn't work with objects... yet
//? Now it does woot woot

const removeDuplicate = (arr) => {
  const map = {};
  arr.forEach((item) => {
    if (!Object.hasOwn(map, JSON.stringify(item))) {
      map[JSON.stringify(item)] = item;
    }
  });
  return Object.values(map);
};


//This is cool I learned something new here
const uniqueArr = (arr) => {
  return [...new Set(arr)];
};


//I want to understand reduce better
const uniqueArr2 = (arr) => {
  return arr.reduce((acc, el) => {
    return acc.includes(el) ? acc : [...ac.el];
  });
};

console.log(removeDuplicate([{ test: {test2: { test: ()=>{return true}}} }, { test: {test2: { test: ()=>{return true}}} }, 1, 3, { test: 2 }]));
