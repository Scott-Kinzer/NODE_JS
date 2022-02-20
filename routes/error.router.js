const {Router} = require('express');
const  {errorController}  = require('../controllers/error.controller');

const errorRouter = Router();
module.exports = errorRouter;

errorRouter.get('/error_page', errorController.renderErrorPage)