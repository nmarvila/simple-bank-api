const accounts = require('../repository/accounts')

module.exports.getBalance = (req, res) => {
    let account_id = req.query.account_id

    let balance = accounts.getBalance(account_id)
    if (balance == undefined) {
        res.status(404).send('0')
    } else {
        res.status(200).send(balance)
    }
}