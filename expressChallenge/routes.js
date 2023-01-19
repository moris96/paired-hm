const express = require('express')

const router = express.Router()

const controllers = require('./controllers')


router.get('/', controllers.index)
router.post('/', controllers.create)
router.get('/:id', controllers.show)

module.exports = router