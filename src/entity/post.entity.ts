import {
    Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn,
} from 'typeorm';
import { Comment } from './comments.entity';
import { CommonFields } from './common.entity';
import { User } from './user.entity';

@Entity('Posts', { database: 'mydatabasename' })
export class Post extends CommonFields {
    @PrimaryGeneratedColumn()
        id: number;

    @Column(
        {
            type: 'varchar',
            width: 255,
            nullable: false,
        },
    )
        title: string;

    @Column(
        {
            type: 'varchar',
            width: 255,
            nullable: false,
        },
    )
        text: string;

    @Column(
        {
            type: 'int',
        },
    )
        userId: number;

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({ name: 'userId' })
        user: User;

    @OneToMany(() => Comment, (comment) => comment.post)
        comments: Comment[];
}
