const accounts = require('../repository/accounts')

module.exports.resetState = (req, res) => {
    accounts.resetState()
}