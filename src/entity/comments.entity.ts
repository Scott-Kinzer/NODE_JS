import {
    Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonFields } from './common.entity';
import { Post } from './post.entity';

@Entity('Comments', { database: 'mydatabasename' })
export class Comment extends CommonFields {
    @PrimaryGeneratedColumn()
        id: number;

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
            nullable: false,
        },
    )
        authorId: string;

    @Column(
        {
            type: 'int',
            nullable: false,
        },
    )
        postId: number;

    @Column(
        {
            type: 'int',
            nullable: false,
        },
    )
        like: number;

    @Column(
        {
            type: 'int',
            nullable: false,
        },
    )
        dislike: number;

        @ManyToOne(() => Post, (post) => post.comments)
        @JoinColumn({ name: 'postId' })
            post: Post;
}
