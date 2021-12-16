const express = require('express')
const cors = require('cors')
const expressSession = require('express-session')
const app = express()
const route =require('./route/index')

app.use(express.json())
app.use(expressSession({
    secret:'secret',
    maxAge:25*60*60*1000,
    saveUninitialized:true,
    resave:false,
    cookie:{maxAge:1000*60*60*24}
}))

app.use(cors())

app.use(route)

app.listen(8080,()=>{
    console.log('ruuning at port 8080')
})