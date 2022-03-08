import { EntityRepository, getManager, Repository } from 'typeorm';
import { User } from '../../entity/user.entity';

@EntityRepository(User)
class UserRepository extends Repository<User> {
    public async createUser(user: any): Promise<any> {
        return getManager().getRepository(User).save(user);
    }

    public async findUserByEmailRepo(email: any): Promise<any> {
        return getManager().getRepository(User).findOne(
            { email },
        );
    }
}

export const userRepository = new UserRepository();
