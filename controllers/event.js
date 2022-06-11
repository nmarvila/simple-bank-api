const eventService = require('../services/event')

module.exports.callEvent = (req, res) => {
    eventService.callEvent(req, res)
}