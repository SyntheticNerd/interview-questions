// Create a module with getName, getSurname, and default export getFullName

const _name = "Test";
const surName = "Name";

export const getName = () => {
  return _name;
};
export const getSurName = () => {
  return surName;
};

const getFullName = () => {
  return _name + " " + surName;
};

export default getFullName;