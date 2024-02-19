//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician:string[] = ['Alijan', 'Saad', 'Sarfaraz'];
let greatmagician:string[] = ['Alijan', 'Saad', 'Sarfaraz'];
function make_great(array:string[]){
    console.log('\n Changing array... ')
    array.map(magician => {
        array.splice(array.indexOf(magician), 1, `Great ${magician}`)
        return array
    })
    console.log(array)
}

function show_magicians(array:string[]){
    console.log('\n Unchanged array:')
    array.map(magician => {
        console.log(magician)
    })
}
make_great(greatmagician)
show_magicians(magician)