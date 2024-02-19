// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
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
