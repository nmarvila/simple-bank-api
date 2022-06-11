const accounts = require('../Repository/Accounts')

module.exports.resetState = (req, res) => {
    accounts.resetState()
}