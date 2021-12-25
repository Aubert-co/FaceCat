const DataUsers = require('../model/users')
const bcrypt = require('bcrypt')
module.exports = async function ApiRegistration(req,res){
    const {name,password} = req.body

    if(!name || !password)return res.status(401).send({msg:'invalid datas'})

    if(typeof name !== 'string')return res.status(401).send({msg:'invalid name'})

    var passwordHash
    DataUsers.create({
        name:name,
        password:passwordHash
    })


    res.status(200).send({msg:'sucess'})
}