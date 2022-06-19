const ShortUrl = require("../models/shorturl")
const Hashids = require("hashids")
const hashid = new Hashids("Juste a salt 748587788eijjjhyuuu", 8)

/* TODO: replace with nanoid */

module.exports = () => {
    return new Promise((resolve, reject) => {
        ShortUrl.countDocuments()
            .then(count => {
                console.log(count)
                resolve(hashid.encode(count))
            })
            .catch(err => reject(err))
    })
}