// (((((((((((((((((((((((((((((((((((((( for of ))))))))))))))))))))))))))))))))))))))
// (1) for of
const arr = [12, 13, 14, 15];
const str = ["A", "B", "C"];
const greeting = "Konni chiwa";
// for (const iterator of object) {

// }
for (const val of arr) {
  //   console.log(val);
}
for (const char of str) {
  //   console.log(char);
}
count = 0;
for (const char of greeting) {
  count++;
  // if(char == " "){
  //     break
  // }
  //   console.log(`Character ${count} of greeting is ${char}`);
}
// console.log(`Total characters in greeting are ${count}`);

// (((((((((((((((((((((((((((((((((((((( Maps ))))))))))))))))))))))))))))))))))))))

// Maps
const map = new Map();
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");

// console.log(map);

for (const key of map) {
  // console.log(key);
}
for (const [key, value] of map) {
  // console.log(key, ": ", value);
}

// (((((((((((((((((((((((((((((((((((((( for in ))))))))))))))))))))))))))))))))))))))

// for in
const myObj = {
  game1: "NFS",
  game2: "COD",
};
// for (const [key, value] of myObj) {
// console.log(key, ": ", value);      // TypeError: myObj is not iterable
// }

for (const key in myObj) {
  // console.log(key, ": ", myObj[key]);
}

const prog = ["c", "c++", "python"];

for (const key in prog) {
  // console.log(key);          // gives key not value
  // console.log(prog[key]);     // gives value
}

const map1 = new Map();
map.set(1, "one");
map.set(2, "two");
map.set(3, "three");

for (const key in map1) {
  // console.log(key);       // no output
}

// (((((((((((((((((((((((((((((((((((((( for each ))))))))))))))))))))))))))))))))))))))

// for each

const coding = ["JS", "python", "Go"];

// callback function

coding.forEach(function (val) {
  // console.log(val);
});

coding.forEach((item) => {
  // arrow function
  // console.log(item);
});

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe())          // TypeError: undefined is not a function
// coding.forEach(printMe); // reference of function

// IMP
coding.forEach((item, idex, arr) => {
  //   console.log(item, idex, arr);
});

const myLearnings = [
  {
    language: "python",
    languageFileName: "py",
  },
  {
    language: "javascript",
    languageFileName: "js",
  },
  {
    language: "c++",
    languageFileName: "cpp",
  },
];

myLearnings.forEach((item) => {
  // console.log(item.language);
  // console.log(item.languageFileName);
});

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const codings = ["JS", "python", "Go"];
// const values = codings.forEach((items)=>{
//   // console.log(items);
//   return items
// })
// console.log(values);    // undefined

// (((((((((((((((((((((((((((((((((((((( filter ))))))))))))))))))))))))))))))))))))))

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// const newNumbers = numbers.filter((num)=> num > 7);
// console.log(newNumbers);

// explicit return
const newNumbers = numbers.filter((num) => {
  return num > 7;
});
// console.log(newNumbers);

const newNum = [];
numbers.forEach((num) => {
  if (num > 7) {
    newNum.push(num);
  }
});
// console.log(newNum);

const books = [
  {
    title: "To Kill a Mockingbird",
    genre: "Fiction",
    publish_year: 1960,
    edition: 1,
  },
  {
    title: "1984",
    genre: "Dystopian",
    publish_year: 1949,
    edition: 1,
  },
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    publish_year: 1925,
    edition: 1,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    publish_year: 1997,
    edition: 1,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Fiction",
    publish_year: 1951,
    edition: 1,
  },
];

// const userBooks = books.filter((bk)=> bk.genre == "Fiction")
// console.log(userBooks);

const userBooks = books.filter((bk) => {
  return bk.publish_year >= 1950;
});
// console.log(userBooks);

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 10];

// const newNumb = numb.map((val) => val + 10);
// console.log(newNumb);

// chaining
const newNumb = numb
  .map((val) => val * 10)
  .map((val) => val + 1)
  .filter((val) => val > 50);
// console.log(newNumb);

// (((((((((((((((((((((((((((((((((((((( reduce ))))))))))))))))))))))))))))))))))))))

const array = [1, 2, 3];
// const sumWithInitial = array.reduce(function (acc, currValue){
//   console.log(`acc: ${acc} and currValue: ${currValue}`);
//   return acc + currValue
// }, 0);
// console.log(sumWithInitial);

const initialValue = 0;
const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

// console.log(sumWithInitial);


const shoppingCart = [
  {
      "itemName": "JS",
      "price": 2999
  },
  {
      "itemName": "Data Scince",
      "price": 12999
  },
  {
      "itemName": "Python",
      "price": 999
  },
  {
      "itemName": "AIML",
      "price": 10000
  },
  {
      "itemName": "Mobile Dev",
      "price": 5999
  }
]

const totalPriceToPay = shoppingCart.reduce((acc, item )=> acc + item.price , 0)
console.log(totalPriceToPay);
