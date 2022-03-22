// Exercise 1 : Comparison //!!!!!!!!!!!!!!!!!!!!!!!!!
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// Test:

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


// let compareToTen = (num)=>{
//  return new Promise((resolve,reject)=>{
//     if(num<10){
//     resolve("Success")
//     }else{
//     reject("Error")
//     }
//   })
// }


// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))



//   Exercise 2 : Promises //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
let prom = new Promise((resolve)=>{
  setTimeout(()=>{
    resolve("4 seconds have passed , Resolved")
  },4000)
})

prom.then(result => console.log(result))

// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?

// let compareToTen = (num)=>{
//      if(num<10){
//       return Promise.resolve('Success');
//      }
//    }
//    compareToTen(12)
//      .then(result => console.log(result))
//      .catch(error => console.log(error))
   
 
// Add code to catch errors and console.log ‘Ooops something went wrong’.

// let compareToTen = (num)=>{
//   if(num<10){
//    return Promise.resolve('Success');
//   }else{
//     throw new Error("Ooops something went wrong")
//   }

// }
// compareToTen(11)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

//   Exercise 3 : Resolve & Reject //!!!!!!!!!!!!!!!!!!!!!!!!!!
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.

let rej = Promise.reject("3")
rej.catch(error => console.log(error));
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
let res = Promise.resolve("Boo")
res.then(result => console.log(result));
