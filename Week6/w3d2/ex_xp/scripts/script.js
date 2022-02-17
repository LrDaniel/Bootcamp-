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



let winBattle = () => {
    let experiencePoints = winBattle()= true ?10:1
    console.log(experiencePoints)
}



let winBattle = () => {
    let experiencePoints;
    winBattle()= true ? experiencePoints = 10 : 1
}


let checkString = (param) => {
    param.isString = true ? true : false
}


let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

switch (colors) {
    case 0:
        console.log(`My `)
        
    break;

    case 1:
        
    break;
    case 2:
        
    break; 

    default:
        break;
}

