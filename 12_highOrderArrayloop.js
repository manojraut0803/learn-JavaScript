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

myLearnings.forEach( (item)=>{
    console.log(item.language);
    console.log(item.languageFileName);
})

