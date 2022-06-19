const serverError = (res) => {
    res.status(500);
    res.json({error:"Server Error"})
}

module.exports = serverError