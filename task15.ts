/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
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
guestList.map((guest) => {
  console.log(
    `Hello ${guest} i am inviting you to please join my dinner party. \n`,
  );
});
