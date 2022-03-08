import jwt from 'jsonwebtoken';
import { getManager } from 'typeorm';
import { Token } from '../entity/tokens.entity';

class TokenService {
    public async generateTokenPair(payload: any):
        Promise<{ accessToken: string, refreshToken: string }> {
        const accessToken = jwt.sign(payload, 'SECRET', { expiresIn: '15m' });
        const refreshToken = jwt.sign(payload, 'SECRET', { expiresIn: '1d' });
        return {
            accessToken,
            refreshToken,
        };
    }

    public async saveToken(userId: number, refreshToken: string): Promise<any> {
        const tokenFromDB = await getManager().getRepository(Token).findOne({ userId });

        if (tokenFromDB) {
            tokenFromDB.refreshToken = refreshToken;
            return getManager().getRepository(Token).save(tokenFromDB);
        }

        const token = await getManager().getRepository(Token).save({ refreshToken, userId });
        return token;
    }
}

export const tokenService = new TokenService();
