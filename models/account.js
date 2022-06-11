class Account {
    constructor(id, balance) {
        this.id = id
        this.balance = balance
    }

    getBalance = () => {
        return this.balance.toString()
    }

    withdraw = (amount) => {
        this.balance -= amount
    }

    deposit = (amount) => {
        this.balance += amount
    }
}

module.exports = Account