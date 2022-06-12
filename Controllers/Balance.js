const BalanceService = require('../Services/Balance')
const AccountsRepositoryArrayInstance = require('../Repository/AccountsRepositoryArray')

module.exports.getBalance = (req, res) => {
    let balanceService = new BalanceService(AccountsRepositoryArrayInstance)
    let balance = balanceService.getBalance(req.query.account_id)

    if (balance == undefined) {
        res.status(404).send('0')
    } else {
        res.status(200).send(balance)
    }
}