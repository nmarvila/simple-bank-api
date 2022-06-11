const balanceService = require('../services/balance')

module.exports.getBalance = (req, res) => {
    const balanceValue = balanceService.getBalance(req, res)
    if (balanceValue == undefined) {
        res.status(404).send('0')
    } else {
        res.status(200).send(balanceValue.toString())
    }
}