const User = require("../models/User");

const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("working")
})

module.exports = router;