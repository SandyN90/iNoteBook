// import express from 'express';
// // import HelloWorld from './src/components'
// //  Here we have created an instance of express

// const app = express();

// const port  =  3000;

// const data = {
//  name: "sandeep",
//  age:27
// }

// app.get("/sandy", (req, res)=> {
//     // res.setHeader("content-type", "application/json");
//     res.statusCode = 200;
//     res.end("data");
// })

// app.listen(port, ()=> {
//     console.log(`This port has been runninng on ${port}`);
// })
const https = require('http');
const fs = require('fs');

const port = 8000;
const routes = {

    "/user": "UserProfile",
    "/": "HelloWorld",
}


const app = https.createServer((req, res) => {
    let routeName;

if(!routes[req.url]) routeName = routes["/"];
else routeName = routes[req.url];
    
    fs.readFile(`../backend/src/components/${routeName}.html`, (err, data) => {
        try {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        } catch (e) {
            console.log(e)
        }
    });
});


app.listen(port, () => console.log(`this port is running on port ${port}`));