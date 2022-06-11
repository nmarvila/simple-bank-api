const express = require('express')
const router = express.Router()
const balance = require('../controllers/balance')

router.get('/', balance.getBalance)

module.exports = router