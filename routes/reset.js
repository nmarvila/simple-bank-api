const express = require('express')
const router = express.Router()
const resetController = require('../controllers/reset')

router.post('/', resetController.resetState)

module.exports = router