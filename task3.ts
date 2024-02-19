/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

let userName:string = "Sarfaraz Unar";
console.log(`Lowercase ${userName.toLowerCase()}`);
console.log(`Uppercase ${userName.toUpperCase()}`);
function toTitleCase(username: string): string {
    return userName.replace(/\w\S*/g, (word) => {
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
}
console.log(`Titlcase ${toTitleCase(userName)}`);