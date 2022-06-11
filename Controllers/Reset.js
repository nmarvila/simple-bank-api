const resetService = require('../Services/Reset')

module.exports.resetState = (req, res) => {
    resetService.resetState(req, res)
    res.sendStatus(200)
}