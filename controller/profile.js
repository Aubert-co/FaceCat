const Users = require('../model/users')
module.exports = async function ApiProfile(req,res){
    try{
        const {id,name} = req.body
        const data = await Users.findOne({where:{id}})
        res.status(200).send({msg:'sucess',data:data})
    }catch(err){
        res.send(501).send({msg:'something went wrong'})
    }
}