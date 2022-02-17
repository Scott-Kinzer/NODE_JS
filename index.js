

const express = require("express");
const req = require("express/lib/request");
const {users} = require("./data");
 
const app = express();

app.listen(3000, () => {
    console.log('Server is running');
});
 


app.set("view engine", "hbs");
app.use(express.json());

const urlencodedParser = express.urlencoded({extended: false});


app.use("/login", function(_, response){
    response.render("login.hbs");
});

app.use("/error_page", function(_, response){
    response.render("error_page.hbs");
});

app.use("/users", function(_, response){
    response.render("users.hbs", {users: users});
});


app.use("/user/:id", function(req, response){
    console.log("WORK?");
    const idUser = req.params.id;
    console.log("ID", idUser);
    const user = users.find((_, i) => i == +idUser );
    console.log(user);
    response.render("user.hbs", {user: user});
});

app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    const emailExist = users.find((user) => user.email === request.body.email);
    console.log('email exs', emailExist);
    if (emailExist) {
        response.redirect("/error_page");
        
    } else {
        users.push(request.body);
        response.redirect("/users");
    }
    
});


app.get('*', function(req, res){
    res.status(404).send('what???');
  });



