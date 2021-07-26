
const {Model, DataTypes} = require('sequelize');

class Usuarios extends Model {
    
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            senha: DataTypes.STRING,
            email:DataTypes.STRING,
            updatedAt:DataTypes.DATE,
            createdAt:DataTypes.DATE,
            
        },{
            sequelize,
            modelName:'usuarios'
        })
    }
    static associate(models){
        this.hasMany(models.Produtos, {foreignKey: 'userId', as: 'produtos'})
    }
}


module.exports = Usuarios;
