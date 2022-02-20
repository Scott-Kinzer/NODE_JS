
const express = require('express');
let {users} = require('./data');
const app = express();
const path = require('path');
const {usersRouter, errorRouter, signRouter} = require('./routes');

app.listen(3005, () => {
    console.log('Server is running port 3005');
});

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json())
const cors = require('cors')
app.use(cors())


app.use('/', usersRouter);
app.use('/', errorRouter);
app.use('/', signRouter);


app.get('*', function(req, res){
    res.status(404).send('what???');
  });



