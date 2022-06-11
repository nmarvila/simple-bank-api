const Account = require('../models/account')

let accounts = []

module.exports.resetState = () => {
    accounts = []
}

module.exports.getBalance = (account_id) => {
    let obtainedAccount = getAccount(account_id)
    if (obtainedAccount == undefined) {
        return undefined
    } else {
        return obtainedAccount.getBalance()
    }
}

module.exports.deposit = (account_id, amount) => {
    let depositAccount = getAccount(account_id)
    if (depositAccount == undefined) {
        depositAccount = addAccount(account_id, amount)
    } else {
        depositAccount.balance += amount
    }
    return depositAccount
}

module.exports.withdraw = (account_id, amount) => {
    let withdrawAccount = getAccount(account_id)
    if (withdrawAccount != undefined) {
        withdrawAccount.balance -= amount
    }
    return withdrawAccount
}

module.exports.transfer = (origin_account_id, destination_account_id, amount) => {
    let originAccount = getAccount(origin_account_id)
    let destinationAccount = getAccount(destination_account_id)
    if (destinationAccount == undefined) {
        destinationAccount = addAccount(destination_account_id, amount)
    } else {
        destinationAccount.balance += amount
    }
    if (originAccount != undefined) {
        originAccount.balance -= amount
    }
    return { originAccount, destinationAccount }
}

getAccount = (account_id) => {
    return accounts.find(conta => conta.id == account_id)
}

addAccount = (account_id, balance) => {
    accounts.push(new Account(account_id, balance))
    return getAccount(account_id)
}