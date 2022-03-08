import {
    Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonFields } from './common.entity';
import { User } from './user.entity';

@Entity('Tokens', { database: 'mydatabasename' })
export class Token extends CommonFields {
    @PrimaryGeneratedColumn()
        id: number;

    @Column(
        {
            type: 'varchar',
            width: 255,
            nullable: false,
        },
    )
        refreshToken: string;

    @Column(
        {
            type: 'int',
            nullable: false,
        },
    )
        userId: number;

        @OneToOne(() => User)
        @JoinColumn({ name: 'userId' })
            user: User;
}
