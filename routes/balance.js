const express = require('express')
const router = express.Router()
const balanceController = require('../controllers/balance')

router.get('/', balanceController.getBalance)

module.exports = router