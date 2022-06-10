const express = require('express')
const router = express.Router()
const contas = require('../repository/contas')

router.get('/', (req, res) => contas.contas.find(c => c.id == req.query.account_id ? res.send(c.balance.toString()) : undefined) ?? res.status(404).send('0'))

module.exports = router