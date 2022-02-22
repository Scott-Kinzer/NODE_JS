import express from 'express';
import { usr } from './users';

const app = express();

app.listen(5500, () => {
    console.log(usr);
    console.log('Server is started');
});
