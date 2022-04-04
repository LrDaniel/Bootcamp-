let fetchUser = async (user) =>{
    const response = await fetch('http://localhost:3000/user')
    return await response.json()
}
fetchUser()
.then((response) => console.log(response.json()))
.catch((err) => console.log(err))



let getData = () => {
    let button = document.getElementById("btn")
    button.addEventListener('click',getData())
    alert("Hello from Javascript")
}
getData()
