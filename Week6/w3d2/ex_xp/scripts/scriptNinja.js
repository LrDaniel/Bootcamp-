// Exercise 1 : Menu
// Instructions
// Using the array below:

let menu = [
  {
    type : "starter",
    name : "Houmous with Pita"
  },
  {
    type : "starter",
    name : "Vegetable Soup with Houmous peas"
  },
  {
    type : "dessert",
    name : "Chocolate Cake"
  }
]

// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.

menu.some((menu)=>menu.type==='dessert')
?console.log(true)
:console.log(false)

// Using an array method, check if all the elements in the array are starters.

menu.every((menu)=>menu.type==='starter')
?console.log(true)
:console.log(false)


// Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.
if (!menu.some((menu)=>menu.type==='main course')){
    menu.push({type:"main course",name:"lobster"})
};

console.log(menu)


// Using this array :

let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]

// Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.


menu.push({type:"veggie",name:vegetarian})

