const {Schema,model} = require("mongoose");

const shortUrlSchema = new Schema({
    url: String,    // the original url
    shortId: String // the id of short url
});

const ShortUrl = model("ShortUrl",shortUrlSchema);

module.exports = ShortUrl
