const express = require('express');
const  {usersController}  = require('../controllers/users.controller');

const usersRouter = express.Router();
module.exports = usersRouter;

usersRouter.get('/users', usersController.renderUsers);

usersRouter.get('/user/:id', usersController.getCurrentUser);

usersRouter.post('/usersDel', usersController.delUser)