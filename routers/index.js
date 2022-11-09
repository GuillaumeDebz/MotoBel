const router = require('express').Router();
const articleRouter = require('./article.router');
const homeRouter = require('./home.router');

router.use('/', homeRouter);
router.use('/article', articleRouter);


module.exports = router;