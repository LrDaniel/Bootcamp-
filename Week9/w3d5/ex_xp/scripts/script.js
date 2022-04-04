//exercise 1.1
let people = ["Greg", "Mary", "Devon", "James"]
 
let gregOut = people.shift()

console.log(people)

//exercise 1.2

let switchName = people.splice(2 , 1 , "Jason")

console.log(people)



//exercise 1.3

let myName = people.push("Daniel")

console.log(people)



//exercise 1.4

console.log(people.indexOf("Mary"));

//exercise 1.5


let newPeople = people.slice(1 , 4)

console.log(newPeople)


//exercise 1.6

let fooindex = newPeople.indexOf("Foo")

console.log(fooindex) //returns -1 because it is not found 

//exercise 1.7


let last = newPeople.slice(-1);
console.log(last)
console.log(newPeople.indexOf("Daniel")) //2
console.log(newPeople.length) //3
//The relation between the last element of an array and the length of the array is -1



//exercise 1 p2.1

for (let eachOne of people) {
    console.log(eachOne)

};


//exercise 1 p2.2

for (let eachOne of people) {
    if (people.length = 3)
    console.log(eachOne)
    
    

}




//exercise 2

let colors = ["blue" , "green" , "cyan" , "red" , "black "]


colors.forEach((item, index) => {
    let placement
        switch (index) {
            case 0 :
                placement = `1st`
                break;
            case 0 :
                placement = `2nd`
                break;
            case 0 :
                placement = `3rd`
                break;    
            default:
                placement = `${index}th`
                break;
        }
    console.log(`My ${placement} choice is the color ${item}`)

    
});

//exercise 3


// let number = ""

// do {
//     number = prompt(`pick a finger , any finger`)
// }
// while (number >= 10)
 
// alert(`you picked ${number}`);


//exercise 4
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
   
console.log(building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor)

let dan = building.nameOfTenants[1];
let danFloors = building.numberOfRoomsAndRent.dan[0];

console.log(`The name is ${dan} and he has ${danFloors} floors`)

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1])
    building.numberOfRoomsAndRent.dan[1] = 1200
    console.log(building.numberOfRoomsAndRent.dan[1])


//exercise 5

let fam = {
    parent : 
        {mother : "jane" , father : "jake"},
    siblings : 
        {brother : "paul" , sister : "karen"},
    pet : "greg"
}

 console.log(Object.keys(fam));
 console.log(Object.values(fam));


 //exercise 6


 let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }


let full = " ";
for (let green in details) {
    full += ` ${green} ${details[green]}`;
}
console.log(full);


//exercise 7 

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]


//didnt figure it out 