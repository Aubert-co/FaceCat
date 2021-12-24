module.exports = async function EditProfile(req,res){

    const {img,name,password} =  req.body
    
    return res.status(200).send({msg:'sucess',data:[]})
}