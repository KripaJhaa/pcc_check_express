const controller = require('./controller').MainController;

class MainClass {

    init(app) {
        app.route('/add').post(controller.AddDetails);
        app.route('/update').post(controller.UpdateDetails);
        app.route('/Cities').post(controller.GetCity);
        app.route('/State').post(controller.GetState);

    }

}

module.exports.MainClass = new MainClass();