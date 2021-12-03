const User = require("../models/User");
const router = require("express").Router();

//Regu=siter
router.post("/register request", (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        img: req.body.img,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);
})

module.exports = router();