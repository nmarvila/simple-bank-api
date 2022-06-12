const ResetService = require('../Services/Reset')
const AccountsRepositoryArrayInstance = require('../Repository/AccountsRepositoryArray')

module.exports.resetState = (req, res) => {
    let resetService = new ResetService(AccountsRepositoryArrayInstance)
    resetService.resetState()
    res.sendStatus(200)
}