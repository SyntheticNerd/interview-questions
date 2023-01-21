const myCounter = (value) => {
  let count = 0;
  // because we don't have any access to this count value it is private
  return {
    increment: (value = 1) => {
      count += value;
    },
    getValue: () => {
      return count;
    },
  };
};

const counter = myCounter();
//With this line right here we are creating a closure
//The closure has to do with the scope and can be found through the console.dir
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());

//This important thing to note is that getValue and increment are functions that will return or manipulate counts value
//We can not access the count inside the function past these operations

// JavaScript, prior to classes, didn't have a native way of declaring private methods,
// but it was possible to emulate private methods using closures.

// Note that the getValue() function has no local variables of its own.
// However, since inner functions have access to the variables of outer functions,
// getValue() can access the variable counter declared in the parent function, myCounter()
