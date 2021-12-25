module.exports = async function ApiProfile(req,res){
    try{
        const {id,name} = req.body
        res.status(200).send({msg:'sucess',data:[]})
    }catch(err){
        res.send(501).send({msg:'something went wrong'})
    }
}