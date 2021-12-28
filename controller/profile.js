const Users = require('../model/users')
module.exports = async function ApiProfile(req,res){
    try{
        const token = req.headers['x-api-token']
        const {jwt:json}= jwt.decode(token,'secret')
        const {name,id} = json
        const data = await Users.findOne({where:{id}})
        const {photo} = data
        res.status(200).send({msg:'sucess',data:{photo}})
    }catch(err){
        res.send(501).send({msg:'something went wrong'})
    }
}