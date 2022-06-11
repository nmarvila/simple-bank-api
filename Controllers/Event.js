const eventService = require('../Services/Event')

module.exports.callEvent = (req, res) => {
    let type = req.body.type

    let resultAccounts = eventService.callEvent(req, res)

    switch (type) {
        case 'deposit':
            res.status(201).send({ 'destination': resultAccounts })
            break;

        case 'withdraw':
            if (resultAccounts == undefined) {
                res.status(404).send('0')
            } else {
                res.status(201).send({ 'origin': resultAccounts })
            }
            break;

        case 'transfer':
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