// function fizBuzz() {
//     let array = [];
//     let count = 1;
//     if (count % 3 === 0 && count % 5 === 0) {
//         array.push("fizzBuzz");
//     } 
//     else if (count % 3 === 0) {
//         array.push("fizz");
//     } 
//     else if (count % 5 === 0) {
//         array.push("buzz");
//     } 
//     else {
//         array.push(count);
        
//     }
//     count++;
//     return array
// }

//fizBuzz();

function fizzBuzz() {
    let array = [];

    for (let count = 1; count <= 100; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            array.push("FizzBuzz");
        } else if (count % 3 === 0) {
            array.push("Fizz");
        } else if (count % 5 === 0) {
            array.push("Buzz");
        } else {
            array.push(count);
        }
    }

    return array;
}

console.log(fizzBuzz());


// var numberOfBottles = 99
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }