## Learn JavaScript Basic to Advance level
***Table of contents***
```
variable
"use strict"
data types
data type conversion




```
### Variables
- var
* let 
+ const

### Errors
-  TypeError: Assignment to constant variable
- 

### Data Types
- Number  => 2 to power 53
- BigInt
- String  => ""  
- Boolean => true/false
- null    => standalone value
- undefined
- Symbol  => unique
- Object
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