// Array
function calculateCartPrice(num1, num2, num3) {
  return [num1, num2, num3];
}
// console.log(calculateCartPrice(22, 23, 24));

function calculateCartPrice(...num1) {
  // REST Operator
  return num1;
}
// console.log(calculateCartPrice(22, 23, 24));

function calculateCartPrice(val1, val2, ...num1) {
  // REST Operator
  return num1;
}
// console.log(calculateCartPrice(22, 23, 24, 32, 55));

// Object
const user = {
  name: "Manoj",
  age: 21,
};
// console.log(user);
function handleObject(anyUser) {
  // console.log(`Username is ${anyUser.name} and age is ${anyUser.age}`);
}
// handleObject(user)
handleObject({
  name: "Manoj",
  age: 21,
});

const myNewArray = [22, 33, 44, 55, 66];
function returnSecondValue(getArray) {
  return getArray[2];
}
// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([22, 33, 44, 55, 66]))

// arrow function
const add = (num1, num2) => {
  return num1 + num2;
};
// console.log(add);   // [Function: add]
// console.log(add(2, 3));
const addTwo = () => ({
  username: "Manoj",
});
// console.log(addTwo());

// const myArray = [1, 3, 4, 21];
// myArray.forEach(function(){})
// myArray.forEach(()=>{})

// IIFE  [ Immediately Invoked Function Expression ]

// ()()

// function dbConnect(){
//     console.log(`DATABASE connected successfully!!!`);
// }
// dbConnect()

(function dbConnect(){
    console.log(`DATABASE connected successfully!!!`);
})()

;(() => {
  console.log(`DATABASE connected successfully!!!`);
})()
