import { Request, Response } from 'express';
import { authService } from '../services/auth.service';

class AuthController {
    public async registration(req: Request, res: Response) {
        const dataToken = await authService.registration(req.body);
        res.cookie(
            'refreshToken',
            dataToken.refreshToken,
            { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true },
        );
        return res.json(dataToken);
    }
}

export const authController = new AuthController();
