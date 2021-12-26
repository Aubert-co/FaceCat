const DataUsers = require('../model/users')
const bcrypt = require('bcrypt')
module.exports = async function ApiRegistration(req,res){
    try{
        const {name,password} = req.body

        if(!name || !password)return res.status(401).send({msg:'invalid datas'})

        if(typeof name !== 'string')return res.status(401).send({msg:'invalid name'})

        var passwordHash
        const registration = await DataUsers.create({
            name:name,
            password:passwordHash
        })


        res.status(200).send({msg:'sucess'})
    }catch(err){
        res.status(501);send({msg:'something went wrong'})
    }
}