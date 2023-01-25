const reverse = (input) => {
  if (input === "") {
    console.log("end");
    return "";
  }
  console.log("input", input);
  let test = reverse(input.substring(1)) + input[0];
  //olleh
  console.log("test", test);
  return test;
};

// console.log(reverse("hello"));

// test = o || ello + h
// reverse(ello)
// test = ol || llo + e
// reverse(llo)
// test = oll || lo + l
// reverse(lo)
// test = olle || o + l
// reverse(o)
// test = olleh || "" + 0

//reverse(hello)
//    test = reverse(ello) + h
//        test = reverse(llo) + e + h
//            test = reverse(lo) + l + e + h
//                test = reverse(o) + l + l + e + h
//                    test = reverse("") + o + l + l + e + h


//Not recursive
const greeting = 'hello'
const reverseHello = (greeting) => {
  let result = ''
  for(let letter of greeting) {
    result = letter + result
  }
  return result
}

console.log(reverseHello(greeting));