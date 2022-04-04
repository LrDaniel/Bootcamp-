// Exercise 1: Sum Elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.
// Don’t use the sum method !

let arr = [1,2,3,4,5]
let sum = 0
arr.forEach((num)=>sum+=num)

console.log(sum)

// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.

let arr1 = [1,2,3,3,3,4,5,5]

console.log(...new Set(arr1));

// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.

let sample = [NaN, 0, 15, false, -22, '',undefined, 47, null]

let filtor = (arr) => {
    return arr.filter((item)=>item)
}
console.log(filtor(sample))

// Expected result : [15, -22, 47]

// Exercise 4 : Repeat Please !
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"

let repeat = (str , numOfRepeat) => {
    if (typeof numOfRepeat === 'undefined'){ //! default num 1
        numOfRepeat = 1
    }
    return numOfRepeat<1
    ?""   //!empty string
    :new Array(numOfRepeat+1).join(str)
}

console.log(repeat('YO!',3))


// Exercise 5 : Turtle & Rabbit
// For this exercise, look at the lesson More JS methods.

// Using this code :

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
// Line up the Turtle and the Rabbit at the start line.
// Expected Output:

//     When you write:

    console.log(startLine);
    console.log(turtle);
    console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'


turtle = turtle.trim().padStart(9, ' ');
rabbit = rabbit.trim().padStart(9, ' ');
console.log(startLine);
console.log(turtle);
console.log(rabbit);



// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?

//! =========🐢

// Submit Your Exercises :