const Sequelize =  require('sequelize');
const Usuarios = require('./models/usuario')
const Produtos = require('./models/produtos')

const sequelize = new Sequelize('PL','postgres','root',{
    dialect: 'postgres',
    host: 'localhost',
    port:6666,    
    define:{
        timeStamps:true
    },
  }); 

  Usuarios.init(sequelize)
  Produtos.init(sequelize)

  Produtos.associate(sequelize.models)
  Usuarios.associate(sequelize.models)



module.exports = sequelize;


