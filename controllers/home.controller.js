const { Request, Response } = require('express');
// const produitService= require("../Services/produit.service") ;

const homeController =
{
    /**
     * Méthode index du home controller
     * @param {Request} req La requête
     * @param {Response} res La reponse
     */
    index: async (req, res) => {
        res.render('Home/Index');
    },

    /**
     * Méthode about du home controller
     * @param {Request} req La requête
     * @param {Response} res La reponse
     */
    about: async (req, res) => {
        res.render('Home/about');
    }
}

module.exports = homeController;