console.log ("hello world")

// exercise 1 /////////////////////////
let favFood = "pizza"

let favMeal = "dinner"

console.log ("im eating", favFood , "everyday at" , favMeal)

// exercise 2 part 1.1 /////////////////////////

let watchedSeries = ["black mirror", "money heist", "the big bang theory"]

let watchedSeriesLength = 3

// exercise 2 part 1.2
let myWatchedSeries = ("black mirror , money heist and the big bang theory")

// exercise 2 part 1.3
console.log ("I watched" , watchedSeriesLength , "series : " , myWatchedSeries)

// exercise 2 part 2.1
watchedSeries[2] = "friends"
 console.log (watchedSeries)

// exercise 2 part 2.2
watchedSeries[3] = "mr.robot"
console.log (watchedSeries)

// exercise 2 part 2.3
watchedSeries.unshift("doctorwho")
console.log (watchedSeries)

// exercise 2 part 2.4
watchedSeries.splice(1,1);
console.log (watchedSeries);

// exercise 2 part 2.5
let thirdLetter = watchedSeries[1][2];
console.log(thirdLetter);

// exercise 2 part 2.6
console.log(watchedSeries);

// exercise 3 part 1.1 /////////////////////////
let celsius = 10
let fahrenheit = (9 * celsius + 169)/5

// exercise 3 part 1.2
console.log(celsius,`C`, "is" ,fahrenheit ,"F")

// exercise 4
let c;
let a = 34;
let b = 21;

// exercise 4.1

console.log(a+b) //first expression
// Prediction:55
// Actual:55

// exercise 4.2
a = 2;

console.log(a+b) //second expression
// Prediction:23
// Actual:23


// exercise 4.3 /////////////////////////
console.log(c)
//C is undefined

// exercise 4.4
console.log(3 + 4 + '5');
//5 counts a string so it will be add to 7 not as a number so it fill show 75

// exercise 5.1
console.log(typeof(15))
// Prediction:number
// Actual:number

console.log(typeof(5.5))
// Prediction:number
// Actual:number

console.log(typeof(NaN))
// Prediction:null
// Actual:number

console.log(typeof("hello"))
// Prediction:string
// Actual:string

console.log(typeof(true))
// Prediction:boolean
// Actual:boolean

console.log(typeof(1 != 2))
// Prediction:number
// Actual:boolean

console.log("hamburger" + "s")
// Prediction:hamburgers
// Actual:string

console.log("hamburgers" + "s")
// Prediction:hamburgerss
// Actual:string

console.log("1" + "3")
// Prediction:13
// Actual:13

console.log("1" - "3")
// Prediction:undefined  
// Actual:-2

console.log("johnny" + 5)
// Prediction:johnny5
// Actual:johnny5

console.log("johnny" - 5)
// Prediction:undefined
// Actual:NaN

console.log(99 * "hello")
// Prediction:NaN
// Actual:NaN

console.log(1 != 1)
// Prediction:false
// Actual:false

console.log(1 == "1")
// Prediction:true
// Actual:true

console.log(1 === "1")
// Prediction:false
// Actual:false



// exercise 6.1 /////////////////////////
console.log(5 + "34")
// Prediction:534
// Actual:534

console.log(5 - "4")
// Prediction:NaN
// Actual:1

console.log(10 % 5)
// Prediction:0
// Actual:0

console.log(5 % 10)
// Prediction:5
// Actual:5

console.log("Java" + "Script")
// Prediction:JaveScript
// Actual:

console.log(" " + " ")
// Prediction:empty
// Actual:empty

console.log(" " + 0)
// Prediction: 0
// Actual: 0

console.log(true + true)
// Prediction:2
// Actual:2

console.log(true + false)
// Prediction:1
// Actual:1

console.log(false + true)
// Prediction:1
// Actual:1

console.log(false - true)
// Prediction:-1
// Actual:-1

console.log(!true)
// Prediction:false
// Actual:false

console.log(3 - 4)
// Prediction:-1
// Actual:-1

console.log("Bob" - "bill")
// Prediction:NaN
// Actual:NaN

















