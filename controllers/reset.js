const resetService = require('../services/reset')

module.exports.resetState = (req, res) => {
    resetService.resetState(req, res)
    res.sendStatus(200)
}