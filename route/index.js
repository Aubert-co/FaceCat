const route = require('express').Router()
const ApiIndex = require('../controller/index')


route.get('/',ApiIndex)

module.exports = route