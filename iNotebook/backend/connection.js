const mongoose = require('mongoose');
const User = require("./user/userSchema");
require('dotenv').config();

const makeConnection = async() => {
    const data = await mongoose.connect(process.env.CONNECTION_STRING)
    if(data) console.log("connection successful");
    else console.log("error");
}

const mongoConnection = async () => {
await makeConnection();

User.find({}).then((data)=> {

    console.log("🚀 ~ file: connection.js:15 ~ mongoConnection ~ userData:", data);
}).catch((err)=> {console.log(err)})
}

mongoConnection();