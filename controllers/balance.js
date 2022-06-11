const balanceService = require('../services/balance')

module.exports.getBalance = (req, res) => {
    balanceService.getBalance(req, res)
}