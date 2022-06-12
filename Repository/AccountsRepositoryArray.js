const AccountsRepository = require('./AccountsRepository')
const Account = require('../Models/Account')

class AccountsRepositoryArray extends AccountsRepository {
    constructor() {
        super()
        this.accounts = []
    }

    resetState = () => {
        this.accounts.splice(0)
    }

    getBalance = (account_id) => {
        let obtainedAccount = this.getAccount(account_id)
        if (obtainedAccount == undefined) {
            return undefined
        } else {
            return obtainedAccount.getBalance()
        }
    }

    deposit = (account_id, amount) => {
        let depositAccount = this.getAccount(account_id)
        if (depositAccount == undefined) {
            depositAccount = this.addAccount(account_id, amount)
        } else {
            depositAccount.deposit(amount)
        }
        return depositAccount
    }

    withdraw = (account_id, amount) => {
        let withdrawAccount = this.getAccount(account_id)
        if (withdrawAccount != undefined) {
            withdrawAccount.withdraw(amount)
        }
        return withdrawAccount
    }

    transfer = (origin_account_id, destination_account_id, amount) => {
        let originAccount = this.getAccount(origin_account_id)
        let destinationAccount = this.getAccount(destination_account_id)
        if (destinationAccount == undefined) {
            destinationAccount = this.addAccount(destination_account_id, amount)
        } else {
            destinationAccount.deposit(amount)
        }
        if (originAccount != undefined) {
            originAccount.withdraw(amount)
        }
        return { originAccount, destinationAccount }
    }

    getAccount = (account_id) => {
        return this.accounts.find(account => account.id == account_id)
    }

    addAccount = (account_id, balance) => {
        this.accounts.push(new Account(account_id, balance))
        return this.getAccount(account_id)
    }
}

const AccountsRepositoryArrayInstance = new AccountsRepositoryArray()

Object.freeze(AccountsRepositoryArrayInstance)

module.exports = AccountsRepositoryArrayInstance