import { Router } from 'express';
import { userController } from '../controllers/user.controller';

export const userRouter = Router();

userRouter.post('/', userController.createUser);

userRouter.get('/user/:email', userController.getUserByEmail);
