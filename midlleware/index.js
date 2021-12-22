const jsonwebtoken = require('jsonwebtoken')

module.exports = async function middlewareApi(req,res,next){
    if(!req.session.token)return res.status(403).send({msg:'undefined token'})

    const token  = req.session

    const verifyToken = await jsonwebtoken.verify(token,'secret')

    if(!verifyToken)return res.status(403).send({msg:'invalid token'})

    
    next()
}
