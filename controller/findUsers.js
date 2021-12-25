const Users = require('../model/users')
module.exports = async function FindUsers(req,res){
    const {name} = req.body
    Users.findAll({
        where:{
            name
        }
    })
    res.status(501).send({msg:'sucess',data:[]})
}