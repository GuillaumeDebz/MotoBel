const { DataTypes } = require ("sequelize");

function model(sequelize)
{
    const attributes =
    {
        ID: { type: DataTypes.INTEGER, allowNull:false, autoIncrement: true, primaryKey: true},
        BRAND: { type: DataTypes.STRING, allowNull:false},
        MODEL: { type: DataTypes.STRING, allowNull:false},
        PROD_YEAR: { type: DataTypes.INTEGER, allowNull:false},
        DETAIL: { type: DataTypes.STRING, allowNull:true},
        PHOTO:{ type: DataTypes.STRING, allowNull:true},
        PRICE: {type:DataTypes.FLOAT, allowNull:false}
    }
    const options = 
    {
        timestamps: false,
        tableName: 'MOTOS'
    }
    return sequelize.define("MOTOS", attributes, options);
}

module.exports=model;