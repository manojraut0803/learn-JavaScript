const myObj = new Object()      // "object constructor" syntax      [singleton object]

const mySym =  Symbol("key1")      // symbol is not a constructor
  
const user = {          // "object literal" syntax
    name: "Manoj Raut",
    "confirm name": "Manoj Raut",
    email: "masmd121@gmail.com",
    age: 21,
    country: "India",
    isLoggedIn: false,
    hobbies: ["coding", "travelling"],

    [mySym] : "mykey1"
} 

// console.log(user);
// console.log(user.email);
// console.log(user["email"]);
// console.log(user.confirm name);
// console.log(user["confirm name"]);
// console.log(user[mySym]);
// user.name = "Manoj Pawar"
user["name"] = "Manoj Pawar"
// Object.freeze(user)
user["name"] = "Manoj Raut"
// console.log(user);
user.greeting = function(){
    console.log("hello........");
}
user.greetingTwo = function(){
    console.log(`hello........from ${this.name}` );
}
// console.log(user.greeting);     // undefined
console.log(user.greeting());  
console.log(user.greetingTwo());  
