const route = require('express').Router()
const ApiIndex = require('./index')
const ApiProfile = require('./profile')
const ApiLogin = require('./login')
const ApiRegistration =require('./registration')
const Middleware = require('../midlleware/index')
route
.get('/',Middleware,ApiIndex)
.get('/apiprofile',Middleware,ApiProfile)
.post('/apilogin',ApiLogin)
.post('/apiregistration',ApiRegistration)
module.exports = route