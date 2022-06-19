const Router = require("express").Router()

const shortUrlController = require("../controllers/shortUrlController")

// access short
Router.get("/:shortId", shortUrlController.redirectToOriginalUrl);

// create short
Router.post("/",shortUrlController.createShort);

module.exports = Router