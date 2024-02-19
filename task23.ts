/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


*/
let x:number = 5;
let y:number = 10;
let personName:string = 'Zia';
let age:number = 25;
let qualification:string = 'BA';
let governor: string = 'Kamran Tissori'

console.log("Test 1: Is x equal to 5? I predict True.");
console.log(x == 5);

console.log("Test 2: Is y greater than 15? I predict False.");
console.log(y > 15);

console.log("Test 3: Is name equal to 'John'? I predict True.");
console.log(personName == 'Zia');

console.log("Test 4: Is age less than or equal to 30? I predict True.");
console.log(age <= 30);

console.log("Test 5: Is qualification equal to BA? I predict False.");
console.log(qualification === 'Inter');

console.log("Test 6: Is x not equal to 5? I predict False.");
console.log(x != 5);

console.log("Test 7: Is age greater than 30? I predict False.");
console.log(age > 30);

console.log("Test 8: Is Kamran Tissori is governor? I predict True.");
console.log(governor == "Kamran Tissori");

console.log("Test 9: Is name not equal to 'Jane'? I predict True.");
console.log(personName != 'Zia');

console.log("Test 10: Is Bilawal Governor? I predict False.");
console.log(governor === "Kamran Tissori");
