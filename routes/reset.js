const express = require('express')
const router = express.Router()
let contas = require('../repository/contas')

router.post('/', (req, res) => {
    contas.contas = []
    res.sendStatus(200)
})

module.exports = router