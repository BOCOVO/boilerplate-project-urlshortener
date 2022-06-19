const { isWebUri } = require("valid-url");

const shortUrlService = require("../services/shortUrlService");
const addProtocol = require("../utils/addProtocolToUrl");
const createId = require("../utils/createId");
const serverError = require("../utils/serverError");

const createShort = async (req, res) => {
    const url = req.body?.url
    if (url && isWebUri(url)) {
        const shortId = await createId()
        const docExists = null
        if (docExists) {
            res.json({
                original_url: url,
                short_url: docExists.shortId
            });
        } else {
            shortUrlService.createShort({ url, shortId })
                .then(() => {
                    res.status(201);
                    res.json({
                        original_url: url,
                        short_url: shortId
                    });
                })
                .catch((err) => {
                    console.log(err)
                    serverError(res)
                })
        }
    } else {
        res.status(400)
        res.json({
            error: 'invalid url'
        });
    }
}

const redirectToOriginalUrl = (req, res) => {
    shortUrlService.findShortByShortId(req.params.shortId)
        .then(doc => {
            if (doc) {
                res.redirect(addProtocol(doc.url))
            } else {
                res.status(404)
                res.sendFile(process.cwd() + '/views/bad_url.html');
            }
        })
        .catch(err => {
            res.send(err);
        })
}

module.exports = {
    createShort,
    redirectToOriginalUrl
}
