const express = require('express');

const app = express();

app.get('',(req,resp)=>{
    resp.send('Hello, this is Portfolio');
})

app.get('/about',(req,resp)=>{
    resp.send('Hello, this is About Portfolio');
})

app.get('/help',(req,resp)=>{
    resp.send('Hello, this is help page');
})

app.listen(5200);

//using nodemon to avoid server restart..