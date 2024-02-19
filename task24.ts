/**
 More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
 If you want to try more comparisons, write more tests. Have at least one True and one 
 False result for each of the following:
• Tests for equality and inequality with strings (Done)

• Tests using the lower case function (Done)
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
(Done)
• Tests using "and" and "or" operators (Done)
• Test whether an item is in a array
• Test whether an item is not in a array
 */
let value1:number = 5;
let value01 = 10;
let value2:number = 5;
let myName:string = "SARFARAZ";
let myArray:string[] = ["Sarfaraz", "Ali", "Javed"];

console.log('Is 5 equals to 5.0?')
console.log(value1 === 5.0); //True

console.log('Is 10 not equals to 5.0?')
console.log(value1 !== value2 ); //False

console.log('Is 10 not equals to 5.0?')
console.log(value1 !== value2 ); //False

console.log('Is myName is equal to sarfaraz (lowercase)?')
console.log(myName === 'sarfaraz' ); //False

console.log('Is myName(lowercase) is equal to sarfaraz?')
console.log(myName.toLowerCase() === 'sarfaraz' ); //True

console.log('Is Value01 is equal to value2')
console.log(value1 === value2); //False

console.log('Is Value01 is greater then value2')
console.log(value01 > value2); //True

console.log('Is Value01 is less then value2')
console.log(value01 < value2); //True

console.log('Is Value01 is greater then or equal to 10')
console.log(value01 >= 10); //True

console.log('Is Value01 is less then or equal to 11')
console.log(value01 <= 11); //True

console.log('Is Value01 is equal to 10 and value2 is equal to 5')
console.log((value01 == 10) && (value2 == 5)); //True

console.log('Is Value01 is equal to 10 and value2 is equal to 5')
console.log((value01 == 10 || 5)); //True

console.log('Is Sarfaraz is in myarray')
console.log(myArray.includes('Sarfaraz')); //True

console.log('Is Naveed is in myarray')
console.log(myArray.includes('Naveed')); //False