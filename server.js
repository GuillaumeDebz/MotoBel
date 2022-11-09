require('dotenv-flow').config();
const { PORT,NODE_ENV } = process.env;

const router = require('./routers/index');
const express= require('express');  
const homeController = require('./Controllers/home.controller');
const pug = require('pug');

const db = require('./config/db');
db();


const app= express();

// - Fichier static
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true }));

// Config du moteur de vue
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(router);

app.listen(PORT, () => {
    console.log(`Server up on port ${PORT} in mode ${NODE_ENV}`);
})