class Account {
    constructor(id, balance) {
        this.id = id
        this.balance = balance
    }

    getBalance = () => {
        return this.balance.toString()
    }
}

module.exports = Account