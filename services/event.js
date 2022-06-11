const accounts = require('../repository/accounts')

module.exports.callEvent = (req, res) => {
    switch (req.body.type) {
        case 'deposit':
            let depositAccount = accounts.deposit(req.body.destination, req.body.amount)
            res.status(201).send({ 'destination': depositAccount })
            break;

        case 'withdraw':
            let withdrawAccount = accounts.withdraw(req.body.origin, req.body.amount)
            if (withdrawAccount == undefined) {
                res.status(404).send('0')
            } else {
                res.status(201).send({ 'origin': withdrawAccount })
            }
            break;

        case 'transfer':
            let resultAccounts = accounts.transfer(req.body.origin, req.body.destination, req.body.amount)
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