const { DataTypes } = require ("sequelize");

function model(sequelize)
{
    const attributes =
    {
        BRAND: { type: DataTypes.INTEGER, allowNull:false, autoIncrement: true,
            primaryKey: true},
        MODEL: { type: DataTypes.STRING, allowNull:false},
        YEAR: { type: DataTypes.INTEGER, allowNull:false},
        Description: { type: DataTypes.STRING, allowNull:false},
        Photo:{ type: DataTypes.STRING, allowNull:false},
        EstDisponible:{ type:DataTypes.BOOLEAN, allowNull:false},
        Prix: {type:DataTypes.FLOAT, allowNull:false}
    }
    const options = 
    {
        timestamps: false,
        tableName: 'Produit'
    }
    return sequelize.define("Produit", attributes, options);
}

module.exports=model;