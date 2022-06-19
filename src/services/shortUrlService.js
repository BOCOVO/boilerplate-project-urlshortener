const ShortUrl = require("../models/shorturl")

/**
 * Create new document
 * @param {ShortUrl Document} data 
 * @returns 
 */
const createShort = async (data) => {
    const model = new ShortUrl(data)
    return new Promise((resolve, reject) => {
        model.save()
            .then(doc => resolve(doc))
            .catch(err => reject(err))
    })
}

/**
 * Find a document
 */

const findShortByUrl = async (url) => {
    return new Promise((resolve,reject)=>{
        ShortUrl.findOne({url},(err,doc)=>{
            if(err) reject(err)
            else resolve(doc)
        })
    })
}

const findShortByShortId = async (shortId) => {
    return new Promise((resolve,reject)=>{
        ShortUrl.findOne({shortId},(err,doc)=>{
            if(err) reject(err)
            else resolve(doc)
        })
    })
}

module.exports = {
    createShort,
    findShortByUrl,
    findShortByShortId
}
