/**
 * Add `http://` to url if it is not present
 * @param {String} url 
 */

const addProtocol = url => {
    return url.startsWith("http") ? url : `http://${url}`
}

module.exports = addProtocol
