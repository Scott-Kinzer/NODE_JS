"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const comments_entity_1 = require("./entity/comments.entity");
const post_entity_1 = require("./entity/post.entity");
const user_entity_1 = require("./entity/user.entity");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, typeorm_1.getManager)().getRepository(user_entity_1.User).find({
        relations: ['posts'],
    });
    res.json(users);
}));
app.get('/comments/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userComments = yield (0, typeorm_1.getManager)().getRepository(post_entity_1.Post).find({
        relations: ['comments'],
        where: {
            userId: Number(req.params.userId),
        },
    });
    res.json(userComments);
}));
app.get('/posts/:userId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const postsByUserId = yield (0, typeorm_1.getManager)().getRepository(post_entity_1.Post).find({
        userId: Number(req.params.userId),
    });
    res.json(postsByUserId);
}));
app.patch('/comments/like', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commentObj = yield (0, typeorm_1.getManager)().getRepository(comments_entity_1.Comment)
        .findOne(Number(req.body.commentId));
    if (commentObj) {
        const { like } = commentObj;
        const commentChanged = yield (0, typeorm_1.getManager)().getRepository(comments_entity_1.Comment).update({
            id: Number(req.body.commentId),
        }, {
            like: like + 1,
        });
        res.json(commentChanged);
    }
}));
app.patch('/comments/dislike', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const commentObj = yield (0, typeorm_1.getManager)().getRepository(comments_entity_1.Comment)
        .findOne(Number(req.body.commentId));
    if (commentObj) {
        const { dislike } = commentObj;
        const commentChanged = yield (0, typeorm_1.getManager)().getRepository(comments_entity_1.Comment).update({
            id: Number(req.body.commentId),
        }, {
            dislike: dislike + 1,
        });
        res.json(commentChanged);
    }
}));
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, typeorm_1.getManager)().getRepository(user_entity_1.User).save(req.body);
    res.json(users);
}));
app.patch('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { password, email } = req.body;
    const users = yield (0, typeorm_1.getManager)().getRepository(user_entity_1.User).update({
        id: Number(req.params.id),
    }, {
        password,
        email,
    });
    res.json(users);
}));
app.patch('/posts/:postId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { text } = req.body;
    const changedPost = yield (0, typeorm_1.getManager)().getRepository(post_entity_1.Post).update({
        id: Number(req.params.postId),
    }, {
        text,
    });
    res.json(changedPost);
}));
app.listen(5500, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Server is started');
    try {
        const connection = yield (0, typeorm_1.createConnection)();
        if (connection) {
            console.log('Database connected');
        }
    }
    catch (e) {
        console.log(e);
    }
}));
//# sourceMappingURL=app.js.map