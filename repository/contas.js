let contas = []

module.exports.resetState = () => {
    contas = []
}

module.exports.getBalance = (account_id) => {
    let contaConsultada = contas.find(conta => conta.id == account_id)
    if (contaConsultada == undefined) {
        return undefined
    } else {
        return contaConsultada.balance.toString()
    }
}

module.exports.deposit = (account_id, amount) => {
    let contaDeposito = contas.find(conta => conta.id == account_id)
    if (contaDeposito == undefined) {
        let indexConta = contas.push({ 'id': account_id, 'balance': amount }) - 1
        contaDeposito = contas[indexConta]
    } else {
        contaDeposito.balance += amount
    }
    return contaDeposito
}

module.exports.withdraw = (account_id, amount) => {
    let contaSaque = contas.find(conta => conta.id == account_id)
    if (contaSaque != undefined) {
        contaSaque.balance -= amount
    }
    return contaSaque
}

module.exports.transfer = (origin_account_id, destination_account_id, amount) => {
    let contaOrigem = contas.find(conta => conta.id == origin_account_id)
    let contaDestino = contas.find(conta => conta.id == destination_account_id)
    if (contaDestino == undefined) {
        let indexConta = contas.push({ 'id': destination_account_id, 'balance': amount }) - 1
        contaDestino = contas[indexConta]
    } else {
        contaDestino.balance += amount
    }
    if (contaOrigem != undefined) {
        contaOrigem.balance -= amount
    }
    return { contaOrigem, contaDestino }
}