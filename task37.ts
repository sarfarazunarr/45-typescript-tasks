/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/
function make_shirt(size:number, message:string){
    console.log(`I love Typescript`);
    console.log(`Large shirt with 45 size and a message \" Khan will be PM Soon! \"`);
    console.log(`Medium shirt with size 20 and a message \"You will be best! \"`);
    console.log(`Small shirt with size 12 and a message \"Mom is best \"`);
    console.log(`Your selected tshirt size is ${size} and your message is \"${message}\" that will be printed on tshirt`);
}
make_shirt(25, "I am Programmer");