var accountID = 122343
let accountEmail = "manojraut0803@gmail.com"
const password = "random120"
currentCity = "Bhopal"
let currentState;

accountID = 112
accountEmail = "changed@email"
// password = "changedPassword122"         //  TypeError: Assignment to constant variable.

console.log(accountID);
console.log(accountEmail);
console.log(password);      
console.log(currentCity);

console.table([accountID, accountEmail, password, currentCity, currentState])