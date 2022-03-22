// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://swapi.dev/api/starships/9/")
//     .then(response => response.json())
//     .then(result => console.log(result));


let starship = async () =>{
  const resp = await fetch("https://swapi.dev/api/starships/9/")
  const data = resp.json()
  console.log(data)
}
starship()

// Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
resolveAfter2Seconds()
 //? resolved auto after 2 seconds 
 //* CORRECT

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result); 
}
asyncCall()
//? call, then afetr 2 seconds log first func resolve 
//*CORRECT


// asyncCall();
// Analyze the code provided above what will be the outcome?