// Create a module with getName, getSurname, and default export getFullName

const _name = "Test";
const surName = "Name";

const getName = () => {
  return _name;
};
const getSurName = () => {
  return surName;
};
const getFullName = () => {
  return _name + " " + surName;
};

module.exports = getName;
module.exports = getSurName;
module.exports = getFullName;

//Common JS modules are used for Node.js
//ES6 modules are used for frontend and browser code