/*
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/

let mydata = {name: "Sarfaraz", age: 19, education: "Undergraduate"};
console.log(mydata.name);
console.log(mydata.age);
console.log(mydata.education);

// Type 2 Interface
interface mydata {
    name: string;
    age: number;
    education: string;
};
let myData: mydata = {name: "Sarfaraz", age: 19, education: 'BA'};
console.log(myData);