// const demo = new Object()
// const demo = {}

// demo.id = "12"
// demo.days = 30
// console.log(demo);

const regulerUser = {
    email: "wkje12@gmail.com",
    fullname: {
        userFullName: {
            fname: "Manoj",
            lname: "Raut"
        }
    },
}
// console.log(regulerUser.fullname);
// console.log(regulerUser.fullname.userFullName);
// console.log(regulerUser.fullname.userFullName.fname);
// console.log(regulerUser["fullname"]["userFullName"]["fname"]);

// console.log(regulerUser);
// delete regulerUser.email
// console.log(regulerUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// console.log({obj1, obj2});       
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)

// target = {}
// const obj3 = Object.assign(target, obj1, obj2)
// console.log(obj3);
// console.log(obj3 === target);

const obj3 = {...obj1, ...obj2}             // spread vlaues
console.log(obj3);


console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));

console.log(regulerUser.hasOwnProperty('email'));

