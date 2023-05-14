const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

