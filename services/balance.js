const accounts = require('../repository/accounts')

module.exports.getBalance = (req, res) => {
    let account_id = req.query.account_id

    let balance = accounts.getBalance(account_id)
    return balance
}