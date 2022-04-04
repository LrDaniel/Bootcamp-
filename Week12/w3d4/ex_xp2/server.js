const http = require('http');
const express = require('express');
const port = 3000;
const app = express();
const fs = require('fs');

const user = {
    firstname: 'John',
    lastname: 'Doe'
}



app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
    
})

app.get('/user',(req, res)=>{
    console.log(user)
    res.send(user)
})

// app.get("/:id",(req, res)=>{
//     console.log(req.params)
//     res.send(req.params)
// })
app.listen(port , (error)=>{
    if (error){
        console.log("something went wrong" , error)
    }else {
        console.log(`listening on port ${port}`)
    }
});