const express = require('express');
const router = express.Router();

const routes = {

    "/user": "UserProfile",
    "/": "HomePage",
    "/404": "404"
}

const middleWare = ()=> {
    console.log("This is middleware");
}

router.post("/", middleWare, (req)=> {
    console.log("data", req.body);
})