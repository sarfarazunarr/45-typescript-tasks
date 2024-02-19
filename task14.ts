/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/
let guestList: string[] = ["Saleem", "Farooq", "Javed", "Ali Raza"];
guestList.map((guest) => {
  console.log(
    `Hello ${guest} i am inviting you to please join my dinner party. \n`,
  );
});
