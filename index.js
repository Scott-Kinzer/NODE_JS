
const express = require('express');
let {users} = require('./data');
const app = express();
const path = require('path');

app.listen(3005, () => {
    console.log('Server is running port 3005');
});

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

const urlencodedParser = express.urlencoded({extended: false});

const cors = require('cors')
app.use(cors())

app.get('/login', function(_, response){
    response.render("login");
});

app.get("/error_page", function(_, response){
    response.render("error_page");
});

app.get("/users", function(_, response){
    response.render("users", {users: users});
});

app.get('/signIn', function(_, response){
    response.render("sign");
});


app.get('/user/:id', function(req, response){
    const idUser = req.params.id;
    const user = users.find((_, i) => i == +idUser );
    response.render("user", {user: user});
});

app.post('/', urlencodedParser, function (request, response) {
    const emailExist = users.find((user) => user.email === request.body.email);

    if (emailExist) {
        response.render('error_page', {error: "Email already exist"});
        
    } else {
        users.push(request.body);
        response.redirect('/users');
    }
    
});
app.post('/usersDel', (request, response) => {
    users = users.filter(user => +user.id !== +JSON.parse(request.body.id))
    response.send();
})

app.post('/signForm', urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    const userEmailExist = users.find((user) => user.email === request.body.email);
    const userPasswordExist = users.find((user) => user.password === request.body.password);


    if (userEmailExist && userPasswordExist) {
        response.render('user', {user: userEmailExist});
        
    } else {
        response.render('error_page', {error: 'Wrong email or wrond password'});
    }
    
});


app.get('*', function(req, res){
    res.status(404).send('what???');
  });



