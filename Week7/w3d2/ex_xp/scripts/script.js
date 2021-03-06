// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

//result is ['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']

// ------2------
const country = "USA";
console.log([...country]);

//result is  ['U', 'S', 'A']

// ------Bonus------
let newArray = [...[,,]];
console.log(newArray);

//result is [undefined, undefined]


// Exercise 2 : Employees
// Instructions
// Using this array:

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


// Using the map() method, say hello to the users using only their firstname (ie. “Hello Bradley”, “Hello Chloe” ect…)

console.log(users.map(e=>`Hello ${e.firstName}`))

// Using the filter() method, create a new array, containing only the Full Stack Residents.

console.log(users.filter(e=>e.role==="Full Stack Resident"))

// Exercise 3 : Star Wars
// Instructions
// Using this array 
let epic = ['a ','long','time','ago','in a','galaxy','far far', 'away'];

// 1. Use the reduce() method to combine all of these into a single string.

let reduced = epic.reduce((acc,prev)=>acc+prev +" ");
console.log(reduced)



// Exercise 4 : Employees #2
// Instructions
// Using this object:

let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];

// Using the filter() method, create a new array, containing the students that passed the course.

let passed = student.filter(e=>e.isPassed===true)
console.log(passed)


// Bonus : Chain the filter method with a map method, to congratulate the students with their name and course name (ie. “Good job Jenner, you passed the course in Information Technology”, “Good Job Marco you passed the course in Robotics” ect…)

let cong = passed.map((passed)=>`Good Job ${passed.name} you passed the course in ${passed.course}`)

console.log(cong)


