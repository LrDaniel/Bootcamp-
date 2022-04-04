// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
        
    }
    alert(a);
}
//a=5 

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}
//a = 0 


//#3
function q3() {
    window.a = "hello";
}



function q32() {
    alert(a);
}

// a is not saves as a variable so it will it will be no defined
//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

//if function is run its going to display test

//#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a.);
// }
// alert(a.);

//a=5 because var a=5 is saved in global scope 



// let winBattle = () => {
//     let experiencePoints = winBattle()= true ?10:1
//     console.log(experiencePoints)
// }



// let winBattle = () => {
//     let experiencePoints;
//     winBattle()= true ? experiencePoints = 10 : 1



let checkString = (param) => {
    param.isString = true ? true : false
}


// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//   colors.forEach((color,index)=>console.log(`My #${index} choice is ${color}`))


  
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];


let colors = [`green`,`blue`,`red`,`black`,`cyan`]
let suffix = [`st` , `nd` , `rd` ,`th`]
for (let index = 0; index < colors.length; index++) {
    let suff = suffix[index]
    const element = colors[index];
    console.log(`My ${index+1}${suff} choice is the color ${element}`)
}




// let number
//  do {
//    number = parseInt(prompt("Number"));
//  }while (number < 10);
 
     


 let lol = {firstname : "slavic" , lastname : "sobol"}

 let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}


console.log(building.numberOfFloors)
console.log(`First floor has ${building.numberOfAptByFloor.firstFloor} apt and third floor has ${building.numberOfAptByFloor.thirdFloor} apt`)
console.log(Object.keys(building.numberOfRoomsAndRent)[1],building.numberOfRoomsAndRent.dan[0])


let sarahRent = Object.values(building.numberOfRoomsAndRent.sarah)[1];
let danRent = Object.values(building.numberOfRoomsAndRent.dan)[1];
let davidRent = Object.values(building.numberOfRoomsAndRent.david)[1];


if (sarahRent+davidRent > danRent){
    danRent = 1200
}


let family = {
    sister : "deez",
    brother: "nuts",
    father : "gottem"
}

let familyKeys = Object.keys(family)
let familyValues= Object.values(family)
console.log(familyValues)
console.log(familyKeys.length)

for (let index = 0; index < familyKeys.length; index++) {
    const element = familyKeys[index];
    console.log(element)
    
}

for (let index = 0; index < familyValues.length; index++) {
    const element = familyValues[index];
    console.log(element)

}

    let details = {
        my: 'name',
        is: 'Rudolf',
        the: 'raindeer'
      }

//       let detailsKeys = Object.keys(details);
//       let detailsValue = Object.values(details);
//       console.log(detailsKeys.join())
//       console.log(detailsValue.join())

    
// for (let index = 0; index < detailsKeys.length ; index++) {
//     let keys = detailsKeys[index];
//     let values = detailsValue[index];
    
// }
let arr= [];

for (let each in details){
     arr.push(`${each} ${details[each]} `)
}
console.log(arr.join(""));

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]

// let sorted = names.sort();
// let secretName = []
// for (let index = 0; index < names.length; index++) {
//     const element =names[index];
//     let first = element.charAt(0)
//     secretName.push(first)
// }
// console.log(secretName.join(""))

let secretName = []
for (let letter of names){
    secretName.push(letter.charAt(0))
    secretName.sort()
}
console.log(secretName.join(""));

let numbers = [123, 8409, 100053, 333333333, 7]

for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 3 === 0) {
        console.log(`${element} is divisable by 3`)
    }else {
        console.log(`${element} is not divisable by 3`)

    }
    
}

// let guestList = {
//     randy: "Germany",
//     karla: "France",
//     wendy: "Japan",
//     norman: "England",
//     sam: "Argentina"
//   }

//   let inputName = prompt("Enter name");

//   if (inputName in guestList){
//     console.log(`Hi! I'm ${inputName}, and I'm from ${guestList[inputName]}`);
//   }else {
//       console.log("Hi im a guest")
//   }

  let age = [20,5,12,43,98,55];

  let sum = 0;
  for (let ages of age) {
      sum += ages
  }
 console.log(sum);

 let biggest = 0;

 for (let i = 0; i <= age.length; i++) {
    if (age[i]>biggest){
         biggest = age[i];
    }    
 }
 console.log(biggest)

console.log(Math.max(age))
let stars ="";

for (let i = 0; i <=5;i++){
    stars += "*"
    console.log(stars)

    
}




function bruh (name , lastname) {
  return console.log(` my name is ${name} ${lastname}`)
}


bruh ("slavic" , "sobol");