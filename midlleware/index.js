const jwt = require('jsonwebtoken')

module.exports = async function middlewareApi(req,res,next){
    const token = req.headers['x-api-token']

    if(!token)return res.status(403).send({msg:'undefined token'})

    const verifyToken = jwt.verify(token,'secret',(err,decoded)=>{
        if(err)return res.status(401).send({msg:'Not authorized'})

        next()
    })

}
