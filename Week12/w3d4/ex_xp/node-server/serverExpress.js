const http = require('http');
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('<h1>This is an HTML tag.</h1>')
})


app.listen(3000,(err)=>{
    if (err){
        console.log("something is wrong with express")
    }else {
        console.log(`im listening on port ${port}`)
    }
})


