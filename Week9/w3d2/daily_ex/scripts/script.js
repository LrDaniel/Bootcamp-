// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument //?
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

let arr =[]
let makeAllCaps = ((array)=>{
   return new Promise((resolve,reject)=>{
       array.forEach(each => {
       if(typeof each !== 'string'){
         return reject("something is not a string")
       }else{
         arr.push(each.toUpperCase())
       }
     })
     return resolve(arr)
  })
})
// makeAllCaps(["a","b","c" ,undefined])
// .then((result)=>console.log(result))
// .catch((error)=> console.log(error))




let sortWords = (arr)=>arr.sort()

const pureString = ['a', 'b', 'c','d']
const notPureString = ['a', 'b', 'c' , true]

makeAllCaps(pureString)
.then((e)=>console.log(sortWords(e)))
.catch((e)=>console.log(e))
//? work
// makeAllCaps(notPureString)
// .then((e)=>sortWords(e))
// .catch((e)=>console.log(e))
//? work
















// Test:

// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

// //in this example, you should see in the console, 
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//       .catch(error => console.log(error))