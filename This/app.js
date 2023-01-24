// What will be logged

// Task 1
function getItem() {
  console.log(this);
}
// Since we used the function key word this refers to the global window

// Task 2
const item = {
  title: "ball",
  getItem() {
    console.log("this", this);
  },
};
// This is going to reference the object with all contained properties

// Task 3
class Item {
  title = "ball";
  getItem() {
    console.log("this", this);
  }
}
// This will be a object called Item with the title property but not the methods
// Be careful using the function keyword inside classes this will not refer to the class scope unless you set up a seperate variable
// better to just use an arrow function which will inherit its parents scope
