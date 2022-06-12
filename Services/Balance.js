class BalanceService {
    constructor(req, res, accountRepository) {
        this.req = req
        this.res = res
        this.accountRepository = accountRepository
    }

    getBalance = () => {
        let account_id = this.req.query.account_id
        let balance = this.accountRepository.getBalance(account_id)
        return balance
    }
}

module.exports = BalanceService