const Users = require('../model/users')
module.exports = async function EditProfile(req,res){
    try{
    const {id,img,name,password} =  req.body
    
    Users.update(name,{
        where:{id}
    })
    return res.status(200).send({msg:'sucess'})
}catch(err){
    res.status(501).send({msg:'something went wrong'})
}
}