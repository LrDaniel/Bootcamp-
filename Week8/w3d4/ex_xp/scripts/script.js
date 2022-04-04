// Analyze the code below. What will be the output?
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//result "I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)""

// Exercise 2: Display Student Info

// Instructions

// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.

// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).

// Destructure the parameter inside the function and return a string as the example seen below:

// displayStudentInfo({first: 'Elie', last:'Schoppik'}) 
// // output : 'Your full name is Elie Schoppik'`



let displayStudentInfo = (objectToDestructure) => 
{console.log(('Your full name is ' + objectToDestructure.first + ' ' + objectToDestructure.last))}
displayStudentInfo({first : "daniel" , last:"kamen"})


// Using this object 

let users = { user1: 18273, user2: 92833, user3: 90315 }

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// for (value in users){
//     users[value] =  users[value]*2
// }


const usersArr = Object.entries(users)
console.log(usersArr)
let usersId = usersArr.map(([key,value])=> [key,value * 2])
console.log(usersId)

// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member);
console.log(member)
 //result object

//  Exercise 5 : Dog Class
//  Instructions
//  Using the Dog class below:

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// };
// Analyze the options below. Which constructor will successfully extend the Dog class?
  // 1
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };


//2 //??????????????????????????????
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };


//   // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };


/////////////////////Number 2

// Evaluate these (ie True or False)

// [2] === [2] ///false  dif memory
// {} === {} ///false


// What is, for each object below, the value of the property number ?

const object1 = { number: 5 }; //4
const object2 = object1; //4
const object3 = object2; //4
const object4 = { number: 5}; //5
object1.number = 4; //4



// Create a class Animal with the attributes name, type and color


// Create a class Mamal that extends from the Animal class. It has a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

// Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.

class Animal {
    constructor(name , type , color){
    this.name = name;
    this.type = type;
    this.color = color
    console.log(this)
}

}


// class Mamal extends Animal {
//     constructor(name , type , color,noise){
//         super(name ,type, color);
//         this.noise = noise
//     }
//     sounds(){
//         console.log(`My name is ${this.name} my type is ${this.type} and my color is ${this.color} and the sound i make is ${this.noise}`)
//     }
// }

// class Cow extends Mamal {
//     constructor(name , type ,color){
//     super(name,type,color)
//     }
//     cowlang(){
//         console.log(`My name is ${this.name}mooooooo and im a ${this.type} typeoooooooo and my color is ${this.color} mooooooo`)
//     }
// }



// let cow = new Cow('shelly' , 'wild' , 'black and white')
// let dog = new Mamal('ben' , 'husky' , 'white' , 'roooooof')
// let dogi = new Mamal('ben' , 'husky' , 'white' , 'roooooof')



class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color);
	}
	sound(sound) {
		return console.log(
			`The name of the animal is: ${this.name}, the type is: ${this.type}, the color is: ${this.color}, and the sound the animal makes is: ${sound}.`
		);
	}
}
let cow = new Mamal('Otis', 'cow', 'white');
cow.sound('Mooo');
