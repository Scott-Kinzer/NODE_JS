import { Request, Response } from 'express';
import { userService } from '../services/user.service';

export class UserController {
    public async createUser(req: Request, res: Response): Promise<any> {
        const createdUser = await userService.createUser(req.body);
        return res.json(createdUser);
    }

    public async getUserByEmail(req: Request, res: Response): Promise<any> {
        const { email } = req.body;
        const findedUser = await userService.findUserByEmail(email);
        return res.json(findedUser);
    }
}

export const userController = new UserController();
