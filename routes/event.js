const express = require('express')
const router = express.Router()
const eventController = require('../controllers/event')

router.post('/', eventController.callEvent)

module.exports = router