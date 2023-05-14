const express = require('express');
const router = express.Router();
const User = require('../user/userSchema');

const routes = {

    "/user": "UserProfile",
    "/": "HomePage",
    "/404": "404"
}

const data = {
    name:"Shravan",
    age: 16,
    height: 5.9,
}

router.get('/', (req, res)=> {
    res.send("This is home page data");
})

router.post("/user", (req, res)=> {
    console.log("data", req.body);
    res.json({message: data});
})

module.exports = router;