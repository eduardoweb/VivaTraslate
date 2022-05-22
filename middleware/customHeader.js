const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === 'eponce') {
            next();
        } else {
            res.status(403)
            res.send({ error: "API_KEY_FAIL" });
        }
    } catch (e) {
        res.status(403)
        res.send({ error: "SOMETHING_WRONG_IN_CUSTOM_HEADER" })
    }

}

module.exports = customHeader