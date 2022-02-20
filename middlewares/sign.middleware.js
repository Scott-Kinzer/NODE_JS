const { users } = require("../data");

module.exports.doesEmailExistMiddleWare = (request, response, next) => {
    try {
        const userEmailExist = users.find((user) => user.email === request.body.email);
        if (!userEmailExist) {
            throw new Error('Something went wrong sorry')            
        } 

        next();
    } catch(e) {
            response.send(e);
    }
}

module.exports.doesAllDataSettledMiddleWare = (request, response, next) => {
    try {
        
        for (let data in request.body) {
            if (!request.body[data].length) {
                throw new Error('Data is empty')
            }
        }
        next();
    } catch(e) {
        console.log(e);
        response.send(e);
    }
}


