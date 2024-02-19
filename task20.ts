/*
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/
let cities: string[] = [];
let mountains: string[] = [];
let rivers: string[] = [];
let coutries: string[] = [];
let languages: string[] = [];

function createArray(arrayname: any[], ...items: string[]){
  arrayname.push(items);
  console.log(arrayname);
  return arrayname
}
createArray(cities, "London", "Paris", "New York", "Dubai");
console.log(cities)