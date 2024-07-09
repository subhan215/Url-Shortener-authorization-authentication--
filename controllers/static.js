const URL = require("../models/url")

async function handleHomeUrls(req , res) {
    
    const allUrls = await URL.find({createdBy: req.user._id})
    return res.render("home" , {
        urls: allUrls
    })
}

module.exports = {
    handleHomeUrls
}