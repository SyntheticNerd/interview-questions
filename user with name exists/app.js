// Check that user with such name exists in array of objects

const users = [
  { id: 1, name: "Jack", isActive: false, age: 20 },
  { id: 1, name: "John", isActive: true, age: 25 },
  { id: 1, name: "Mike", isActive: false, age: 15 },
  { id: 1, name: "Jacob", isActive: true, age: 5 },
];

const userExists = (name, arr) => {
  if (arr.filter((user) => user.name === name).length > 0) {
    return true;
  }
  return false;
};

//this is cool i didn't know about some
const exists = (name, arr) => arr.some((el) => el.name === name);
//this does the same thing as above