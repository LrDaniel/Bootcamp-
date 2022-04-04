let x = 21;
let y = 87;

if(x>y){
    console.log('x is the bigger number')
} else {
    console.log('y is the bigger number')
}






let newDog = `Chihuahua`
console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())


if(newDog == `Chihuahua`){
    console.log("I like")
} else {
    console.log("I dont like")
}




let num = prompt("odd or even")

if(num % 2 == 0){
    console.log("the number is even")
} else {(num % 2 == 1) 
    console.log("the number is odd")
}

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

switch (users.length) {
    case 0:
        console.log(
            `no one is online`
            )
    break;
    case 1:
        console.log(
            `${users[0]} is online`
            )
    break;
    case 2:
        console.log(
            `${users[0]} and ${users[1]} are online`
            )

    break;
    default:
        console.log(
            `${users[0]} and ${users[1]} + ${users.length-2} more users are online`
            )
}

