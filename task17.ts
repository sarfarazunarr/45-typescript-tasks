/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

*/ 

let guestList: string[] = ["Saleem", "Farooq", "Javed", "Ali Raza"];
guestList.map((guest) => {
  console.log(
    `Hello ${guest} i am inviting you to please join my dinner party. \n`,
  );
});

console.log(
  `Sorry ${guestList[2]} and ${guestList[3]} can't come to dinner. \n`,
);

// Modified List
guestList.splice(2, 1, "Ayaz");
guestList.splice(3, 1, "Rizwan");

console.log(
  "Great News! I got the large table now i am inviting some other my cool friends",
);

guestList.push("Dost Ali", "Saad", "Majid");
guestList.map((guest) => {
  console.log(
    `Hello ${guest} i am inviting you to please join my dinner party. \n`,
  );
});
// Start
console.log("I am Sorry Friends! I can't invite you all to dinner because i can\'t arrive at a time at my new dinner table so that i have to invite only 2 friends");

for(let i = 0; i < guestList.length + 2; i++){
  guestList.pop()
}
guestList.map(guest => {
   console.log(`Hello ${guest} i am inviting you to please join my dinner party. \n`)
})
guestList.pop()
guestList.pop()

guestList.map(guest => {
console.log(guest)
})
