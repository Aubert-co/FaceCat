const route = require('express').Router()
const ApiIndex = require('./index')
const ApiProfile = require('./profile')
const ApiLogin = require('./login')
const ApiRegistration =require('./registration')
const Middleware = require('../midlleware/index')
route
.get('/',Middleware,ApiIndex)
.get('/profile',Middleware,ApiProfile)
.post('/login',ApiLogin)
.post('/registration',ApiRegistration)
module.exports = route