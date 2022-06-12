class EventService {
    constructor(req, res, accountRepository) {
        this.req = req
        this.res = res
        this.accountRepository = accountRepository
    }

    callEvent = () => {
        let type = this.req.body.type
        let destination = this.req.body.destination
        let origin = this.req.body.origin
        let amount = this.req.body.amount

        switch (type) {
            case 'deposit':
                let depositAccount = this.accountRepository.deposit(destination, amount)
                return depositAccount

            case 'withdraw':
                let withdrawAccount = this.accountRepository.withdraw(origin, amount)
                return withdrawAccount

            case 'transfer':
                let resultAccounts = this.accountRepository.transfer(origin, destination, amount)
                return resultAccounts

            default:
                break;
        }
    }
}

module.exports = EventService