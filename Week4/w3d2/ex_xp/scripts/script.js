// //exercise 1
// function infoAboutMe() {
//     console.log("Daniel","24","Gaming")
// }

// infoAboutMe();


// //exercise 1.2

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//     console.log(`Your name is ${personName} and your age is ${personAge} and your favorite color is ${personFavoriteColor}`)
// }

// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// //exercise 2
// function calculateTip() { 
//     let johnAmount = prompt(`Bill Amount`);
//     switch (true) {
//         case (johnAmount < 50 ):
//                 return console.log(`you payed ${johnAmount} and tipped ${johnAmount*0.2}`);
//         case (johnAmount > 50 && johnAmount < 200) :
//                 return  console.log(`you payed ${johnAmount} and tipped ${johnAmount*0.15}`);
//         case (johnAmount > 200): 
//                 return  console.log(`you payed ${johnAmount} and tipped ${johnAmount*0.1}`);
//         default:
//             break;
//     }
// }

// calculateTip();

     








        //exercise 3


// let isDivisible = () => {
//     let sum = [];
//     const reducer = (previousValue, currentValue) => previousValue + currentValue;

//     for (let index = 1; index <= 500; index++) {
//         if (index % 23 === 0) {
//             console.log(index)
//             sum.push(index);
//         }
//     }
//     console.log(`The sum is ${sum.reduce(reducer)}`)
//     return sum
// }

// isDivisible();


// //exercise 4
// let stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// let prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 
// let shoppingList = ["banana" , "orange" , "apple"]

// totalprice = 0

// function myBill(){
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
//     console.log(Object.keys(prices));


// }

//DO NOW KNOW HOW TO DO THIS 

//exercise 5
// let changeEnough = (itemPrice, amountOfChange) => {
//     change = [];
//     for (let i = 0; i < 1; i++) {
//         change.push(amountOfChange[0] * .25, amountOfChange[1] * .1, amountOfChange[2] * .05, amountOfChange[3] * .01)
//         const reducer = (previousValue, currentValue) => previousValue + currentValue;
//         totalChange = change.reduce(reducer);
//         if (itemPrice < totalChange) {
//             return true
//         } else
//             return false
//     }
// };
// changeEnough(4, 6)



//exercise 6

function hotelCost(){
   
   let numOfNights = ""
    do {
        numOfNights= prompt(`Number of nights:`);    
    }while (numOfNights < 1){
        alert(`try again`)
        
    }
}

hotelCost();