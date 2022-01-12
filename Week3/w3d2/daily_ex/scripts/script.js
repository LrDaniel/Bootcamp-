//exercise 1.1 remove banana
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.splice(0,1);
console.log(fruits)

//exercise 1.2 sort alphabetical order
fruits.sort()
console.log(fruits)

//exercise 1.3 add kiwi to the end of the array
fruits.push("Kiwi")
console.log(fruits)

//exercise 1.4 remove apple in a different way
fruits.shift()
console.log(fruits)

//exercise 1.5 sort reversed order
fruits.reverse()
console.log(fruits);




//exercise 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0])



