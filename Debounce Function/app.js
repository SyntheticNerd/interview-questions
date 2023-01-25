//Create a debounce function

const debounce = (fn, timeout = 300) => {
  let timer;
  clearTimeout(timer);
  return (...args) => {
    console.log("inner fn", args);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, timeout);
  };
};

const saveInput = (name) => {
  console.log(name);
};

const processChange = debounce(saveInput, 2000);
processChange("foo");
