let contas = []

module.exports.resetState = () => {
    contas = []
}

module.exports.getBalance = (account_id) => {
    let contaConsultada = getConta(account_id)
    if (contaConsultada == undefined) {
        return undefined
    } else {
        return contaConsultada.balance.toString()
    }
}

module.exports.deposit = (account_id, amount) => {
    let contaDeposito = getConta(account_id)
    if (contaDeposito == undefined) {
        addConta(account_id, amount)
        contaDeposito = getConta(account_id)
    } else {
        contaDeposito.balance += amount
    }
    return contaDeposito
}

module.exports.withdraw = (account_id, amount) => {
    let contaSaque = getConta(account_id)
    if (contaSaque != undefined) {
        contaSaque.balance -= amount
    }
    return contaSaque
}

module.exports.transfer = (origin_account_id, destination_account_id, amount) => {
    let contaOrigem = getConta(origin_account_id)
    let contaDestino = getConta(destination_account_id)
    if (contaDestino == undefined) {
        addConta(destination_account_id, amount)
        contaDestino = getConta(destination_account_id)
    } else {
        contaDestino.balance += amount
    }
    if (contaOrigem != undefined) {
        contaOrigem.balance -= amount
    }
    return { contaOrigem, contaDestino }
}

getConta = (account_id) => {
    return contas.find(conta => conta.id == account_id)
}

addConta = (account_id, balance) => {
    contas.push({ 'id': account_id, 'balance': balance })
}