class ErrorController {
    renderErrorPage(_, response) {
        response.render("error_page");
    }
}

module.exports.errorController = new ErrorController();