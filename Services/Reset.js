class ResetService {
    constructor(accountRepository) {
        this.accountRepository = accountRepository
    }

    resetState = () => {
        this.accountRepository.resetState()
    }
}

module.exports = ResetService