import { Router } from 'express';
import { authRouter } from './auth.router';
import { userRouter } from './user.router';

const router = Router();

router.use('/users', userRouter);
router.use('/registration', authRouter);

export const apiRouter = router;
