const express = require('express')
const router = express.Router()
const balanceController = require('../Controllers/Balance')

router.get('/', balanceController.getBalance)

module.exports = router