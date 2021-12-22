const bcript = require('bcrypts')
const Users = require('../model/users')
module.exports = async function ApiLogin(req,res){
    try{
    const {email,password} = req.body

    if(!email || !password)return res.status(401).send({msg:'invalid datas'})

    if(typeof email !== 'string')return res.status(401).send({msg:'invalid email'})

    const findEmail = await Users.find({where:{
        email
    }})
    if(findEmail.lenght === 1){
        
    }
    
    res.status(200).send({msg:'sucess'})
}catch(err){
    res.status(501).send({msg:'something went wrong'})
}
}