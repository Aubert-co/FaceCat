const Users = require('../model/users')
module.exports = async function ApiIndex(req,res){
    try{
        const {userId:id} =  req.session.userId
        const data = await Users.findOne({where:{id}})
        res.status(200).send({msg:'sucess',data})
    }catch(err){
        res.status(501).send({msg:'something went wrong'})
    }
}