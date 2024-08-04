// Destructuring assignment

//  Object and Array.

// Array Destructuring
let arr = ["abc", "xyz"]
// destructuring assignment
// sets firstName/a = arr[0]
// and surname/b = arr[1]
const [a, b] = arr;
// console.log(a);
// console.log(b);

// Object Destructuring
const course = {
    courseName: "JavaScript",
    price: "$100",
    courseInstructor: "XYZ"
}
// console.log(course);
// course.courseName
const {courseInstructor, courseName} = course;
// console.log(courseName);

// props
// const navbar = (props.company)=>{}
// navbar(company = "LKJG")

// const navbar = ({company})=>{}
// navbar(company = "LKJG")


// JSON API

// {
//     "name": "asd",
//     "age": 21,
//     "isAlive": true,
// }


[
    {},
    {},
    {},
]