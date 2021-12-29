const Users = require('../model/users')
module.exports = async function FindUsers(req,res){
    try{
        const {name} = req.body
        const data =  await Users.findAll({ where:{name}})
        const {photo,photo_image} = data
        res.status(200).send({msg:'sucess',data:{photo,name}})
    }catch(err){
        res.status(501).send({msg:'something went wrong'})
    }   
}