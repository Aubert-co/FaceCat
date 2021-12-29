const route = require('express').Router()
const ApiIndex = require('./index')
const ApiProfile = require('./profile')
const ApiLogin = require('./login')
const ApiRegistration =require('./registration')
const Middleware = require('../midlleware/index')
const ApiFindUser = require('./findUsers')

route
.get('/',Middleware,ApiIndex)
.get('/profile',Middleware,ApiProfile)
.post('/login',ApiLogin)
.post('/registration',ApiRegistration)
.post('/finduser',ApiFindUser)
module.exports = route