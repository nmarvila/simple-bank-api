const accounts = require('../repository/accounts')

module.exports.resetState = (req, res) => {
    accounts.resetState()
    res.sendStatus(200)
}