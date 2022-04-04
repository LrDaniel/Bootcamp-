// 4/3 * pi * r^3

 let form = document.getElementById("MyForm")
 console.log(form)




let radius = document.getElementById("radius")
let radiusInput = radius.value

form.addEventListener("submit", (e)=> {
    e.preventDefault(); 
    let radiusInput = radius.value
    let volCalc = 4/3 * 3.14 * radiusInput**3
    let finalNum = volCalc.toFixed(2)
    document.getElementById("volume").value = `${finalNum}`;
})
