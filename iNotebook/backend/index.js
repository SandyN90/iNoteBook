const express = require('express');
const app = express();
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config({path: './.env'})
require('./connection.js')
app.use(express.json());

const middleWare = (req, res, next)=> {
    console.log("this is middleWare function");
    next();
}

app.use(require('./routes/auth'),middleWare);


app.listen(process.env.PORT, () => console.log(`this port is running on port ${process.env.PORT}`));