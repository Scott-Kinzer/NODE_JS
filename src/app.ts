/* eslint-disable no-console */
import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { createConnection, getManager } from 'typeorm';
import { Comment } from './entity/comments.entity';
import { Post } from './entity/post.entity';
import { User } from './entity/user.entity';
import { apiRouter } from './routes/api.router';

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(apiRouter);

app.get('/users', async (req: Request, res: Response) => {
    const users = await getManager().getRepository(User).find({
        relations: ['posts'],
    });
    res.json(users);
});

app.get('/comments/:userId', async (req: Request, res: Response) => {
    const userComments = await getManager().getRepository(Post).find({
        relations: ['comments'],
        where: {
            userId: Number(req.params.userId),
        },
    });
    res.json(userComments);
});

app.get('/posts/:userId', async (req: Request, res: Response) => {
    const postsByUserId = await getManager().getRepository(Post).find({
        userId: Number(req.params.userId),
    });
    res.json(postsByUserId);
});

app.patch('/comments/like', async (req: Request, res: Response) => {
    const commentObj = await getManager().getRepository(Comment)
        .findOne(Number(req.body.commentId));

    if (commentObj) {
        const { like } = commentObj;

        const commentChanged = await getManager().getRepository(Comment).update(
            {
                id: Number(req.body.commentId),
            },
            {
                like: like + 1,
            },
        );
        res.json(commentChanged);
    }
});

app.patch('/comments/dislike', async (req: Request, res: Response) => {
    const commentObj = await getManager().getRepository(Comment)
        .findOne(Number(req.body.commentId));

    if (commentObj) {
        const { dislike } = commentObj;

        const commentChanged = await getManager().getRepository(Comment).update(
            {
                id: Number(req.body.commentId),
            },
            {
                dislike: dislike + 1,
            },
        );
        res.json(commentChanged);
    }
});

// app.post('/users', async (req: Request, res: Response) => {
//     const users = await getManager().getRepository(User).save(req.body);
//     res.json(users);
// });

app.patch('/users/:id', async (req: Request, res: Response) => {
    const { password, email } = req.body;

    const users = await getManager().getRepository(User).update({
        id: Number(req.params.id),
    }, {
        password,
        email,
    });
    res.json(users);
});

app.patch('/posts/:postId', async (req: Request, res: Response) => {
    const { text } = req.body;

    const changedPost = await getManager().getRepository(Post).update({
        id: Number(req.params.postId),
    }, {
        text,
    });
    res.json(changedPost);
});

app.listen(5500, async () => {
    console.log('Server is started');

    try {
        const connection = await createConnection();
        if (connection) {
            console.log('Database connected');
        }
    } catch (e) {
        console.log(e);
    }
});
