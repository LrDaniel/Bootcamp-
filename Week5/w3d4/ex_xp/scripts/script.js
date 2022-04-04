// Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
let sum = (a,b) => a+b;

console.log(sum(1,5))

// Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.

function dec (a) {
     let gram = a*1000
     console.log(`${a} killograms is ${gram} grams`)
}
dec(5)

// Then, use function expression and invoke it.

let dec1 = function(a) {
   let gram2 = a*1000;
   console.log(`${a} killograms is ${gram2} grams`)
}
dec1(7)


// Write in a one line comment, the difference between function declaration and function expression.
//  function declaration can be use on global scope while expressions cant//

// Finally, use a one line arrow function and invoke it.

let one = a => {gram3 = a *1000;
    console.log(`${a} killograms is ${gram3} grams`)
}
one(23)


// Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

let job = "Programmer"
let goe = "Israel"
let partnerName = "Jasmin"
let numOfKids = 2

function self(){
    document.querySelector("h1").innerHTML = `You will be a ${job} in ${goe}, and married to ${partnerName} with ${numOfKids} kids.`
}



// Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.
// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

