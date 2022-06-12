const BalanceService = require('../Services/Balance')
const AccountsRepositoryArrayInstance = require('../Repository/AccountsRepositoryArray')

module.exports.getBalance = (req, res) => {
    let balanceService = new BalanceService(req, res, AccountsRepositoryArrayInstance)
    let balance = balanceService.getBalance()

    if (balance == undefined) {
        res.status(404).send('0')
    } else {
        res.status(200).send(balance)
    }
}