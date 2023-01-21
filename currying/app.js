// Write a function which helps to achieve multiply(a)(b)
const multiply = (num1) => (num2) => {
  return num1 * num2;
};

console.log(multiply(2)(3));

// Create a curry function
const curry = function (fn) {
  return function f1(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      console.log("Need more arguments");
      return function f2(...moreArgs) {
        const newArgs = args.concat(moreArgs);
        return f1(...newArgs);
      };
    }
  };
};
const curriedSum = curry((a, b, c) => a + b + c);
// Currying takes a function from callable as f(a, b, c) into callable as f(a)(b)(c)
// keep the function callable normally and return the partial if the arguments count is not enough
// Currying allows us to easily get partials.