const accounts = require('../repository/accounts')

module.exports.callEvent = (req, res) => {
    let type = req.body.type
    let destination = req.body.destination
    let origin = req.body.origin
    let amount = req.body.amount

    switch (type) {
        case 'deposit':
            let depositAccount = accounts.deposit(destination, amount)
            res.status(201).send({ 'destination': depositAccount })
            break;

        case 'withdraw':
            let withdrawAccount = accounts.withdraw(origin, amount)
            if (withdrawAccount == undefined) {
                res.status(404).send('0')
            } else {
                res.status(201).send({ 'origin': withdrawAccount })
            }
            break;

        case 'transfer':
            let resultAccounts = accounts.transfer(origin, destination, amount)
            if (resultAccounts.originAccount == undefined) {
                res.status(404).send('0')
            } else {
                res.status(201).send({ 'origin': resultAccounts.originAccount, 'destination': resultAccounts.destinationAccount })
            }
            break;

        default:
            break;
    }
}