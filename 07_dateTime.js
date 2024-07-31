let myDate = new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toUTCString());

// let createDate = new Date(2024, 0, 12)
// let createDate = new Date(2024, 0, 12, 5, 30, 20)
// let createDate = new Date("2023-07-31")  // yyyy-mm-dd
let createDate = new Date("07-31-2024"); // mm-dd-yyyy

console.log(createDate.toLocaleString());

let myTimeStamps = Date.now();

console.log(myTimeStamps);
console.log(createDate.getTime());

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getDay());

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    day: "2-digit",
    hour: "numeric",
    month: "long",
  })
);

/*
methods
constructor:    ƒ Date()
getDate:        ƒ getDate()
getDay:         ƒ getDay()
getFullYear:    ƒ getFullYear()
getHours:       ƒ getHours()
getMilliseconds:ƒ getMilliseconds()
getMinutes:     ƒ getMinutes()
getMonth:       ƒ getMonth()
getSeconds:     ƒ getSeconds()
getTime:        ƒ getTime()
getTimezoneOffset:ƒ getTimezoneOffset()
getUTCDate:     ƒ getUTCDate()
getUTCDay:      ƒ getUTCDay()
getUTCFullYear: ƒ getUTCFullYear()
getUTCHours:    ƒ getUTCHours()
getUTCMilliseconds:ƒ getUTCMilliseconds()
getUTCMinutes:  ƒ getUTCMinutes()
getUTCMonth:    ƒ getUTCMonth()
getUTCSeconds:  ƒ getUTCSeconds()
getYear:        ƒ getYear()

setDate:        ƒ setDate()
setFullYear:    ƒ setFullYear()
setHours:       ƒ setHours()
setMilliseconds:ƒ setMilliseconds()
setMinutes:     ƒ setMinutes()
setMonth:       ƒ setMonth()
setSeconds:     ƒ setSeconds()
setTime:        ƒ setTime()
setUTCDate:     ƒ setUTCDate()
setUTCFullYear: ƒ setUTCFullYear()
setUTCHours:    ƒ setUTCHours()
setUTCMilliseconds:ƒ setUTCMilliseconds()
setUTCMinutes:  ƒ setUTCMinutes()
setUTCMonth:    ƒ setUTCMonth()
setUTCSeconds:  ƒ setUTCSeconds()
setYear:        ƒ setYear()

toDateString:   ƒ toDateString()
toGMTString:    ƒ toUTCString()
toISOString:    ƒ toISOString()
toJSON:         ƒ toJSON()
toLocaleDateString:ƒ toLocaleDateString()
toLocaleString: ƒ toLocaleString()
toLocaleTimeString:ƒ toLocaleTimeString()
toString:       ƒ toString()
toTimeString:   ƒ toTimeString()
toUTCString:    ƒ toUTCString()

valueOf:        ƒ valueOf()
Symbol(Symbol.toPrimitive):ƒ [Symbol.toPrimitive]()

*/
