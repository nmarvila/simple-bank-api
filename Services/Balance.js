class BalanceService {
    constructor(accountRepository) {
        this.accountRepository = accountRepository
    }

    getBalance = (account_id) => {
        let balance = this.accountRepository.getBalance(account_id)
        return balance
    }
}

module.exports = BalanceService