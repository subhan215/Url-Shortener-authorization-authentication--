const express = require("express");
const URL = require("../models/url");
const { handleHomeUrls } = require("../controllers/static");
const { restrictTo } = require("../middleware/auth");
const router = express.Router() ;
router.get("/" , restrictTo(["Normal"]),  handleHomeUrls)

router.get("/signup" , (req , res) => {
    return res.render("signup")
})

router.get("/login" , (req , res) => {
    return res.render("login")
})


module.exports = router