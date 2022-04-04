// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// Test:

let compareToTen = (num) => {
    new Promise ((resolve, reject) => {
        if(num<10){
        resolve(console.log(`${num} is less than 10, success`))
    }else{
        reject(console.log(`${num} is greater than 10 , error`))
    }})}

//In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(resolve => console.log(result))
  .catch(error => console.log(error))