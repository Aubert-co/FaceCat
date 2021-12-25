const bcript = require('bcrypt')
const Users = require('../model/users')
module.exports = async function ApiLogin(req,res){
    try{
    const {name,password} = req.body

    if(!name || !password)return res.status(401).send({msg:'invalid datas'})

    if(typeof name !== 'string')return res.status(401).send({msg:'invalid name'})

    const findname = await Users.find({where:{
        name
    }})
    if(findname.lenght === 1){
        
    }
    
    res.status(200).send({msg:'sucess'})
}catch(err){
    res.status(501).send({msg:'something went wrong'})
}
}