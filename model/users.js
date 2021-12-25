const {Sequelize,DataTypes,Op} = require('sequelize')

const Schema  =  new Sequelize('users','root','',{
    host:'localhost',
    dialect:'mysql',
    logging:false
})

const Users =  Schema.define('usersface',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    photo:{
        type:Sequelize.BLOB
    },
    photo_name:{
        type:Sequelize.STRING
    },
    photo_imagem:{
        type:Sequelize.STRING
    }
})

module.exports =  Users