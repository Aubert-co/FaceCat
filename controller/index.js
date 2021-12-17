module.exports = async function ApiIndex(req,res){
    console.log(req.session.id)
    res.status(200).send({msg:'hi'})
}