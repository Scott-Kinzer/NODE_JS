import {
    Column, Entity, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonFields } from './common.entity';
import { Post } from './post.entity';

@Entity('Users', { database: 'mydatabasename' })
export class User extends CommonFields {
    @PrimaryGeneratedColumn()
        id: number;

    @Column(
        {
            type: 'varchar',
            width: 255,
            nullable: false,
        },
    )
        firstName: string;

    @Column(
        {
            type: 'varchar',
            width: 255,
            nullable: false,
        },
    )
        lastName: string;

    @Column(
        {
            type: 'int',
            width: 255,
            nullable: true,
        },
    )
        age?: number;

    @Column(
        {
            type: 'varchar',
            width: 255,
            nullable: false,
            unique: true,
        },
    )
        phone: string;

    @Column(
        {
            type: 'varchar',
            width: 255,
            nullable: false,
            unique: true,
        },
    )
        email: string;

    @Column(
        {
            type: 'varchar',
            width: 255,
            nullable: false,
        },
    )
        password: string;

    @OneToMany(() => Post, (post) => post.user)
        posts: Post[];
}
