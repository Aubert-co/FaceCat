const route = require('express').Router()
const ApiIndex = require('./index')
const ApiProfile = require('./profile')
const ApiLogin = require('./login')
const ApiRegistration =require('./registration')

route
.get('/',ApiIndex)
.get('/apiprofile',ApiProfile)
.post('/apilogin',ApiLogin)
.post('/apiregistration',ApiRegistration)
module.exports = route