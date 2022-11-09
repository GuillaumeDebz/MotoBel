const { Sequelize } = require('sequelize');
// const tedious = require ('tedious');

const { dbName, dbConfig}= require("../config.json");

module.exports=db={};

async function initialize()
{
    const dialect="mssql";
    const host= dbConfig.server
    const { userName, password} = dbConfig.authentication.options;

    const sequelize = new Sequelize(dbName,userName,password,
        {
            "host": host,
            "dialect": dialect
        });
    
    try {
    await sequelize.authenticate();
    console.log('Connexion réussie');
    } catch (error) {
        console.log('FAIL');
    }

    db.model= require("../models/motos.model")(sequelize);
};

module.exports=initialize