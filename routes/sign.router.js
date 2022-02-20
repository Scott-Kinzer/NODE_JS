const express= require('express');
const  {authController}  = require('../controllers/sign.controller');
const { doesEmailExistMiddleWare, doesAllDataSettledMiddleWare } = require('../middlewares/sign.middleware');
const urlencodedParser = express.urlencoded({extended: false});

const signRouter = express.Router();
module.exports = signRouter;

signRouter.get('/signIn', authController.getSignPage);
signRouter.get('/login', authController.loginRender)


signRouter.post('/signForm', urlencodedParser, doesEmailExistMiddleWare, authController.signFormRequest);
signRouter.post('/regForm', urlencodedParser,doesAllDataSettledMiddleWare,  authController.regFormRequest);