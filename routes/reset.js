const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    contas = []
    res.sendStatus(200)
})

module.exports = router