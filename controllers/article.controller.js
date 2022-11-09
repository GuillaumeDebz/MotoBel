const { Request, Response } = require('express');

const articleController = 
{
    /**
     * Méthode index du article controller
     * @param {Request} req La requête
     * @param {Response} res La reponse
     */
    index: async(req, res) => 
    {                
        res.render('article/Products');
    }
 
}

module.exports = articleController;