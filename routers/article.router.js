const articleRouter = require('express').Router();
const articleController = require('../controllers/article.controller')

articleRouter.get('/', articleController.index);



module.exports = articleRouter;