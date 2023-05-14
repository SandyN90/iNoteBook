const https = require('http');
const fs = require('fs');
require('./connection.js')

const port = 8000;
const routes = {

    "/user": "UserProfile",
    "/": "HomePage",
    "/404": "404"
}


const app = https.createServer((req, res) => {
    let routeName;

if(!routes[req.url]) routeName = routes["/404"];
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