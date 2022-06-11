const express = require('express')
const router = express.Router()
const resetController = require('../Controllers/Reset')

router.post('/', resetController.resetState)

module.exports = router