//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician:string[] = ['Alijan', 'Saad', 'Sarfaraz'];
function make_great(array:string[]){
    console.log('Changing array... \n')
    array.map(magician => {
        array.splice(array.indexOf(magician), 1, `Great ${magician}`)
        return array
    })
    console.log(array)
}

function show_magicians(array:string[]){
    console.log('Here are some great magicians: \n')
    array.map(magician => {
        console.log(magician)
    })
}
make_great(magician)
show_magicians(magician)