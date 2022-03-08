import { tokenService } from './token.service';
import { userService } from './user.service';

class AuthService {
    public async registration(user: any) {
        const { email } = user;

        const isUserExist = await userService.findUserByEmail(email);
        if (isUserExist) {
            throw new Error('Eror, user already exist');
        }

        const createdUser = await userService.createUser(user);
        return this.getTokenDataAndSave(createdUser);
    }

    private async getTokenDataAndSave(userData: any) {
        const { id, email } = userData;
        const tokensPair = await tokenService.generateTokenPair({ id, email });
        await tokenService.saveToken(id, tokensPair.refreshToken);
        return {
            ...tokensPair,
            id,
            email,
        };
    }
}

export const authService = new AuthService();
