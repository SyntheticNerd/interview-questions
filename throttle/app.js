//Create a throttle function

const throttle = (fn, timeout = 300) => {
  let isWaiting = false;
  return (...args) => {
    if (!isWaiting) {
      fn.apply(this, args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, timeout);
    }
  };
};

const saveInput = (name) => {
  console.log(name);
};

const processChange = throttle(saveInput, 2000);
processChange("foo");
