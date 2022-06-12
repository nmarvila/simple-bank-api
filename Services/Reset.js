class ResetService {
    constructor(req, res, accountRepository) {
        this.req = req
        this.res = res
        this.accountRepository = accountRepository
    }

    resetState = () => {
        this.accountRepository.resetState()
    }
}

module.exports = ResetService