//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
//!  Answer:
function checkWords (array){
    const longWords= array.filter(el=>el.length>6);
    const lessThanTen=longWords.every(el=>el.length<10);
    return lessThanTen
}
console.log(checkWords(array))

