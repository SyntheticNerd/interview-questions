// Write a function which helps to achieve multiply(a)(b)
const multiply = (num1) => (num2) => {
  return num1 * num2;
};

console.log(multiply(2)(3));

// Create a curry function
const curry = function (fn) {
  return function f1(...args) {
    if (args.length >= fn.length) {
        // check to make sure we have all the arguments that we need
        // if we do we execute the function with all the elements
      return fn(...args);
    } else {
        // if we don't we can return a partial or any relevant warning
      console.log("Need more arguments");
      return function f2(...moreArgs) {
        // then we can get more arguments
        const newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};
const curriedSum = curry((a, b, c) => a + b + c);
// The idea is to curry a function of functions to return partials when not all arguments are given and it also
// offers a nice method of chaining functions while returning partials
// Currying takes a function from callable as f(a, b, c) into callable as f(a)(b)(c)
// keep the function callable normally and return the partial if the arguments count is not enough
// Currying allows us to easily get partials.