let {users} = require('./../data');

class SignController {
    getSignPage(_, response) {
        response.render("sign");
    }

    loginRender(_, response) {
        response.render("login");
    }

    signFormRequest(request,response) {
            if(!request.body) return response.sendStatus(400);
            const userEmailExist = users.find((user) => user.email === request.body.email);
            const userPasswordExist = users.find((user) => user.password === request.body.password);
        
            if (userEmailExist && userPasswordExist) {
                response.render('user', {user: userEmailExist});
                
            } else {
                response.render('error_page', {error: 'Wrong email or wrond password'});
            }

    }


    regFormRequest(request, response) { 
        console.log(request.body);
            const emailExist = users.find((user) => user.email === request.body.email);

            if (emailExist) {
                response.render('error_page', {error: "Email already exist"});
                
            } else {
                users.push(request.body);
                response.redirect('/users');
            }
    }

}

module.exports.authController = new SignController();