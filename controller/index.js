const Users = require('../model/users')
const jwt = require('jsonwebtoken')
module.exports = async function ApiIndex(req,res){
    try{
       // const {userId:id} =  req.session.userId
        const token = req.headers['x-api-token']
        const {jwt:json}= jwt.decode(token,'secret')
        const {name,id} = json
        const data = await Users.findOne({where:{id}})
        const {photo,photo_image} = data
        res.status(200).send({msg:'sucess',data:{photo,name} })
    }catch(err){
        res.status(501).send({msg:'something went wrong'})
    }
}