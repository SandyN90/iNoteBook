const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
app.use(cors({
    origin: "http://localhost:8081"
}))
dotenv.config({ path: './.env' })
require('./connection.js')

app.use(express.json());

const middleWare = (req, res, next) => {
    console.log("this is middleWare function");
    next();
}

app.use(require('./routes/auth'), middleWare);


app.listen(process.env.PORT, () => console.log(`this port is running on port ${process.env.PORT}`));