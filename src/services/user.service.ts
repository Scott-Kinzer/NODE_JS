import bcrypt from 'bcrypt';
import { userRepository } from '../repositories/user/user.repository';

class UserService {
    public async createUser(user: any) {
        const { password } = user;

        const hashedPassw = await this._hashPassword(password);
        const createdUser = await userRepository.createUser({
            ...user,
            password: hashedPassw,
        });

        return createdUser;
    }

    public async findUserByEmail(email: any) {
        const findedUser = await userRepository.findUserByEmailRepo(email);
        return findedUser;
    }

    private async _hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 10);
    }
}

export const userService = new UserService();
