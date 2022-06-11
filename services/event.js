const accounts = require('../repository/accounts')

module.exports.callEvent = (req, res) => {
    let type = req.body.type
    let destination = req.body.destination
    let origin = req.body.origin
    let amount = req.body.amount

    switch (type) {
        case 'deposit':
            let depositAccount = accounts.deposit(destination, amount)
            return depositAccount

        case 'withdraw':
            let withdrawAccount = accounts.withdraw(origin, amount)
            return withdrawAccount

        case 'transfer':
            let resultAccounts = accounts.transfer(origin, destination, amount)
            return resultAccounts

        default:
            break;
    }
}