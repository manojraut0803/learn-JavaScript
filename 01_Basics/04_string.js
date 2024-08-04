const name = "Manoj"
const age = 21
const url = "https://google.com/Manoj Raut"
// console.log(name + age);

// string interpolation
console.log(`Hello, My name is ${name}. ${age} years old.`);

const gameName = new String('abc-123')

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.anchor("https://google.com/"))
console.log(gameName.charAt(2));
console.log(url.includes("Manoj"));
console.log(gameName.indexOf('b'));
console.log(url.replace(" ", "%20"));
console.log(gameName.substr(0, 6))
console.log(gameName.substring(0, 5));
console.log(gameName.slice(0, 7));
console.log(gameName.slice(-7, 4));
console.log(gameName.split("-"));
console.log(gameName.toUpperCase());


/*
Methods
length
ƒ at()
ƒ big()
ƒ blink()
ƒ bold()
ƒ charAt()
ƒ charCodeAt()
ƒ codePointAt()
ƒ concat()
ƒ String()
ƒ endsWith()
ƒ fixed()
ƒ fontcolor()
ƒ fontsize()
ƒ includes()
ƒ indexOf()
ƒ isWellFormed()
ƒ italics()
ƒ lastIndexOf()
ƒ link()
ƒ localeCompare()
ƒ match()
ƒ matchAll()
ƒ normalize()
ƒ padEnd()
ƒ padStart()
ƒ repeat()
ƒ replace()
ƒ replaceAll()
ƒ search()
ƒ slice()
ƒ small()
ƒ split()
ƒ startsWith()
ƒ strike()
ƒ sub()
ƒ substr()
ƒ substring()
ƒ sup()
ƒ toLocaleLowerCase()
ƒ toLocaleUpperCase()
ƒ toLowerCase()
ƒ toString()
ƒ toUpperCase()
ƒ toWellFormed()
ƒ trim()
ƒ trimEnd()
ƒ trimStart()
ƒ trimEnd()
ƒ trimStart()
ƒ valueOf()
ƒ [Symbol.iterator]()

*/