const bcrypt = require('bcrypt')
const Users = require('../model/users')
const jwt = require('jsonwebtoken')
module.exports = async function ApiLogin(req,res){
    try{
        const {name,password} = req.body
        
        if(!name || !password)return res.status(401).send({msg:'invalid datas'})

        if(typeof name !== 'string')return res.status(401).send({msg:'invalid name'})

        const findname = await Users.findOne({where:{name}})

        if(findname.lenght === 0)return  res.status(405).send({msg:'user not found'})
        
        const {id,password:passwordHash} =  findname
        const compare = bcrypt.compareSync(password,passwordHash)
        
        if(!compare)return res.status(405).send({msg:'invalid passwornd'})


        req.session.userId = id
        
        const tokens = {name,id}
        const token = jwt.sign({jwt:tokens},'secret',{expiresIn:24*60*60})
        
        res.set('x-api-token',token)
        res.status(200).send({msg:'sucess',token})
    }catch(err){
        res.status(501).send({msg:'something went wrong'})
    }
}