
let {users} = require('./../data');

class UsersController {
    renderUsers(_, response) {
        response.render("users", {users: users});
    }

    getCurrentUser(req, response) {
        const idUser = req.params.id;
        const user = users.find((_, i) => i == +idUser );
        response.render("user", {user: user});
    }

    delUser(request, response) {
        users = users.filter(user => +user.id !== +JSON.parse(request.body.id))
        response.send();
    }
}

module.exports.usersController = new UsersController();