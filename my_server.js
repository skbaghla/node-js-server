const http = require('http');// handle node js server response and request 
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify({name:'Sanjeev Baghla',email:'er.skbaghla@gmail.com'}));
    resp.end();
}).listen(4500);



















// const dataControl = (req,resp) =>
// {
//     resp.write("<h1>Hello, this is Sanjeev</h1>")
//     resp.end();
// }

// function test(a)
// {
//     return a*10;
// }

// const test =(a)=>a*100;