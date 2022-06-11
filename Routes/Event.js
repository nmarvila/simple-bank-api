const express = require('express')
const router = express.Router()
const eventController = require('../Controllers/Event')

router.post('/', eventController.callEvent)

module.exports = router