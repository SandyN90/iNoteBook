const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    cPassword: {
        type:String,
        required: true
    },
    mNumber: {
        type: Number,
    },
    name: {
        type: String,
        required: true
    },
});

const User = mongoose.model('USER', userSchema);

// const fetchData = (callBack)=> {

// }

module.exports = User;