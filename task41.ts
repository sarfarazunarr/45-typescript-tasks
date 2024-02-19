// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magician:string[] = ['Alijan', 'Saad', 'Sarfaraz'];
function show_magicians(array:string[]){
    console.log('Here are some great magicians: \n')
    array.map(magician => {
        console.log(magician)
    })
}
show_magicians(magician)