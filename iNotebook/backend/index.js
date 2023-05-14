const express = require('express');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config({path: './.env'})
require('./connection.js')

const middleWare = ()=> {
    console.log("this is middleWare function");
    next();
}

const app = express();
app.use('./routes/auth',middleWare);

app.listen(process.env.PORT, () => console.log(`this port is running on port ${process.env.PORT}`));