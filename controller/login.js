module.exports = async function ApiLogin(req,res){
    const {name,password} = req.body

    if(!name || !password)return res.status(401).send({msg:'invalid datas'})

    if(typeof name !== 'string')return res.status(401).send({msg:'invalid name'})
    res.status(200).send({msg:'sucess'})
}