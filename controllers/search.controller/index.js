const controller = require('./controller').MainController;

class MainClass {

    init(app) {
        console.log('Mainclass initialize ....', controller.MainController)
        app.route('/searchCompany').get(controller.search_companies);
        app.route('/details').post(controller.get_details);
    }

}

module.exports.MainClass = new MainClass();