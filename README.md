## Learn JavaScript Basic to Advance level
***Table of contents***
```
variable
"use strict"
data types
data type conversion
memory a) stack b) heap
Strings
Array
Number
Date Time
Objects
Destructuring
JSON API
Functions
parameter
fn with Object and Array
scope Global and Local
scope level and hoisting
this [object]
arrow function
IIFE ()()
How does JS Execute Code
Call stack
Control flow in JS
for loop 
break and continue
while and do while loop
High order array loop
Filter map 
Reduce
DOM
Relation in DOM
create edit remove element in DOM
Events
Async
Network API || Ajax || XMLHtmlRequest
V8 Engine
Promise
Aync await
fetch API
Object Oriented
prototype   __proto__
call and this
Class Constructer and static
Inheritance
Bind
Setter Getter and Stack Overflow
Lexical Scoping and closure
```
### Variables
- var
* let 
+ const

### Errors
-  TypeError: Assignment to constant variable
- 

### Data Types

#### [1] Seven primitive data types
- Number  => 2 to power 53
- BigInt
- String  => ""  
- Boolean => true/false
- null    => standalone value
- undefined
- Symbol  => unique
#### [2] one non-primitive data type (Reference)
- Objects
- Array
- Functions
```
>> typeof undefined ==> undefined
>> typeof null ==> Object
```
### Data Type Conversion
#### String Conversion
```
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string
```
#### Numeric Conversion
```
let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number
```
#### Boolean Conversion
```
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)
```
## Note
```
Value	                        Becomes…
undefined	                    NaN
null	                        0
true and false	                1 and 0
0, null, undefined, NaN, ""	    false
any other value	                true
```

### Memory  Stack | Heap
```
1] Stack => Premitive       copy | not changes
2] Heap  => Non Premitive   reference | changes in original value
```

## How does JS Execute Code
### JavaScript Execution Context

JS -> Single Threaded


[.js file] -> 

>(1) Global Execution Context -> this
    
Browser -> Window object

node env-> {}

>(2) Functional Execution Context

>(3) Eval Execution Context

>Run In - 2 Phases
>>(1) Memory Creation Phase

>>(2) Execution Phase

```
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(6, 4)
```

#### (1) Global Execution Context -> this

>(1) Memory Creation Phase
```
val1 -> undefined
val2 -> undefined
addNum -> defination (function)
result1 -> undefined
result2 -> undefined
```

>(2) Execution Phase
```
val1 <- 10
val2 <- 5
addNum -> [new variable environment + execution thread ] execution context
    >> (1) memory phase
    >> (2) execution phase 

result1 <- 15

addNum -> [new variable environment + execution thread ] execution context
    >> (1) memory phase
    >> (2) execution phase 
    
result2 <- 10

[A] addNum(num1, num2)
(1) memory phase [ memory allocation ]
val1 -> undefined
val2 -> undefined
total -> undefined

(2) execution phase [ Mathematical operation + proceesing ]
num1 <- 10
num2 <- 5
total <- 15
    return [ Global Execution Context ]

[A] addNum(6, 4)
(1) memory phase [ memory allocation ]
num1 -> undefined
num2 -> undefined
total -> undefined

(2) execution phase [ Mathematical operation + proceesing ]
num1 <- 6
num2 <- 4
total <- 10
    return [ Global Execution Context ]


```
## Call stack
```

```

# High order array loop

1) for of
```
["", "", ""]
[{}, {}, {}]

for ( const iterator of object){

}

used for -> array , string, map
```

2) for in
```
for (const iterator in object){

}

used for -> array -> myarray[key] || object -> myObj[key]
```

3) for each
```
1) Array
2) Object

obj/arr.forEach(callback function){

}
eg.
myObj.forEach( ()=> {})
```

### filter map
```
filter
const var = arr.filter( (val)=> val > 2 )
                or
const var = arr.filter( (val)=> {
     return val > 2 
})

map
const var = arr.map( (val)=> val + 2 )
```

### chaining

```
.map().map().filter()
```

### reduce
```
const array = [1, 2, 3, 4]
const initialValue = 0
const sumWithInitial = array.reduce((accumulator, currentValue)=> accumulator + currentValue, initialValue);
```

## DOM
```
Document Object Model

getElementBy...
getattribute
setattribute
querySelector
querySelectorAll
etc.
```
### create a new element

### Relations in DOM
```
Parent child relation
Child parent relation
Child child relation
```
### create new element

### edit and remove element

## Events
```
.addEventListener()
.attachEvent()
jQuery -> .on()

"
document.getElementById('id').addEventListener("click", (e)=>{
    ----
    ----
}, false)

"

Event Propagation
    Event Bubbling -> false (inside to outside)
    Event Capturing -> true (top to bottom)

    Event SpilOver

e -> event
e.stopPropagation()
e.preventDefault()
```

```
setTimeout()
setInterval()
clearTimeout()
clearInterval()
```

## API || Ajax || XMLHtmlRequest
```
const xhr = new XMLHtmlRequest() 
xhr.open("METHOD", API_URL)
xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            const data = JSON.parse(this.responseText)
        }
    }
xhr.send()

readyState
0 - UNSENT - Client has been created.
1 - OPENED - open() has been called.
2 - HEADERS_RECEIVED -  send() has been called, and headers and status are available.
3 - LOADING Downloading - responseText holds partial data.
4 - DONE -  The operation is complete.
```

### V8 Engine

## Promise
```
operations:
    file access
    database request
    cryptography

states:
    1) pending
    2) fullfilled
    3) rejected

.then()
.catch()
.finally()

```

## Aync await
```
try
catch
```
## fetch
```
fetch("https://example.com/users")
fetch("https://example.com/users", {any: object})
```





