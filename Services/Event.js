class EventService {
    constructor(accountRepository) {
        this.accountRepository = accountRepository
    }

    callEvent = (type, destination, origin, amount) => {
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