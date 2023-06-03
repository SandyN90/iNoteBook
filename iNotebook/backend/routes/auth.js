const express = require('express');
const router = express.Router();
const User = require('../user/userSchema');

const routes = {

    "/user": "UserProfile",
    "/": "HomePage",
    "/404": "404"
}

const data = {
    name: "Shravan",
    age: 16,
    height: 5.9,
}

router.get('/', async (req, res) => {
    const newData = await User.find({});
    if (newData) res.json(newData);
    else res.status(500);
});

router.post("/user", (req, res) => {

    const { email, password, cPassword, mNumber, name } = req.body;

    if (!email || !password || !cPassword || !name) {
        return res.status(422).json({ message: console.log("Please, fill the field property") })
    }
    User.findOne(({ email: email }))
        .then(((userExist) => {
            if (userExist) return res.status(422).json({ message: console.log("User is already exist!") })

            const user = new User({ email, password, cPassword, mNumber, name });

            user.save().then(() => {
                res.status(201).json({ message: "user registered successfully" });
            }).catch((err) => res.status(500).json({ error: "Failed to registered" }));
        })).catch((err) => { console.log(err) })
    console.log("data found", req.body);
})

module.exports = router;