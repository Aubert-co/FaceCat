const Services = {
    ApiProfile:(token)=>{
        fetch('localhost:8080/profile',{
            method:'POST',
            token
        })
    }
}