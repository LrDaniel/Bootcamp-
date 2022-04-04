
/////////////////////////////////////////////////////////////////////////////////exercise 1

// Using a DOM property, retrieve the h1 and console.log it.

let head1 = document.querySelector(`h1`).innerHTML
console.log(head1)

// Using DOM methods, remove the last paragraph in the <article> tag.

let paras = document.querySelector(`p:last-child`)
paras.remove();
console.log(paras)

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

let h2 = document.querySelector(`h2`)
h2.addEventListener("mousedown" , function onDown(){
    h2.style.color = "red"
})
h2.addEventListener("mouseup" , function onUp(){
    h2.style.color = ""
})
console.log(h2)

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

let h3 = document.querySelector(`h3`)

h3.addEventListener("mousedown", function gone(){
    h3.style.display = "none"
})

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let btn = document.querySelector(`button`)
        document.querySelectorAll(`p`).forEach(e=>
        btn.addEventListener("click", function bold(){
            e.style.fontWeight = "bold"
}))

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// let h1 = document.querySelector("h1")
// h1.addEventListener("mouseover", function random(){
//      let randomNum = Math.floor(Math.random()*100)
//     console.log(randomNum)
//     h1.style.fontSize = `${randomNum}px`
// })

/////////////////////////////////////////////////////////////////////////////////exercise 2
// Retrieve the form and console.log it.

let form = document.querySelector(`form`)
console.log(form)

// Retrieve the inputs by their id and console.log them.

let fname = document.getElementById(`fname`)
let lname = document.getElementById(`lname`)
console.log(fname)
console.log(lname)

// Retrieve the inputs by their name attribute and console.log them.

let fNameAtt = document.getElementById(`fname`).name
let lNameAtt = document.getElementById(`lname`).name
console.log(fNameAtt)
console.log(lNameAtt)

// When the user submits the form (ie. submit event listener)
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

let ul = document.querySelector(`.usersAnswer`)
let liFirst = document.createElement("li")
let liLast = document.createElement("li")
form.addEventListener("submit", (e)=> {
    e.preventDefault();
    let fnameInput = fname.value
    let lnameInput = lname.value
    if (fnameInput === "" || lnameInput === ""){
        console.log("Please enter a valid value")
    }else {
        ul.appendChild(liFirst).innerHTML = `<li>First name of the user is ${fnameInput}</li>`;
        ul.appendChild(liLast).innerHTML = `<li>Last name of the user is ${lnameInput}</li>`;
        liFirst.style.listStyle="none"
        liLast.style.listStyle="none"
        console.log(ul)
}})


/////////////////////////////////////////////////////////////////////////////////exercise 3
// In the JS file:
// Create a global variable named allBoldItems.

let allBoldItems = []
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
let getBold_items = () => {
 document.querySelectorAll(`strong`).forEach(e => {
    allBoldItems.push(e.innerHTML)   
})}
getBold_items()
console.log(allBoldItems)


// Create a function called highlight() that changes the color of all the bold text to blue.

let highlight = () => {
    document.querySelectorAll(`strong`).forEach(e => {
   e.style.color = "blue"
})}
highlight()

// Create a function called return_normal() that changes the color of all the bold text back to black.

let return_normal = () => {
    document.querySelectorAll(`strong`).forEach(e => {
   e.style.color = ""
})}
return_normal()
// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

let pLastChild = document.querySelectorAll("p")[3]

pLastChild.addEventListener("mouseover",highlight)
pLastChild.addEventListener("mouseout",return_normal)



