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
        type: String,
    },
    name: {
        type: String,
        required: true
    },
});

const User = mongoose.model('USER', userSchema);