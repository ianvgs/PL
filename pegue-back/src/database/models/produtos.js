const {Model, DataTypes} = require('sequelize');

class Produtos extends Model {
    
    static init(sequelize){
        super.init({            
             
            quantidade: DataTypes.INTEGER, 
            valor: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
             

        },{
            sequelize
        })
    }

    static associate(models){
        this.belongsTo(models.usuarios, {foreignKey: 'userId', as: 'Usuario'})
    }
}


module.exports = Produtos;
