const Users = require('../model/users')
module.exports = async function FindUsers(req,res){
    try{
        const {name} = req.body
        const data =  await Users.findAll({ where:{name}})
        res.status(501).send({msg:'sucess',data})
    }catch(err){
        res.status(501).send({msg:'something went wrong'})
    }   
}