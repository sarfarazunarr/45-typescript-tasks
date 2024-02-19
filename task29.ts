/**
  Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */
let favorite_fruits:string[] = ["Grapes", "Mango", "Banana"];

if(favorite_fruits.includes("Grapes")){
    console.log('You really like Grapes!');
}
else if(favorite_fruits.includes("Mango")){
    console.log('You really like Mango!');
}
else if(favorite_fruits.includes("Banana")){
    console.log('You really like Banana!');
}
else if(favorite_fruits.includes("Orange")){
    console.log('You really like Orange!');
}
else{
    console.log('It looks you don\'t like fruits!');
}