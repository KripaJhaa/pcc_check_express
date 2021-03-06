const config = require('./Config/mongoUrl');
const mongoose = require("mongoose");

module.exports = function (app) {

    mongoose.connect(config.mongoUrl, {
        useNewUrlParser: true
    }, (err, db) => {
        if (!err) {
            console.log('mongoose connected...')
        }
        return db;
    });
    mongoose.Promise = global.Promise;

    process.on("SIGINT", cleanup);
    process.on("SIGTERM", cleanup);
    process.on("SIGHUP", cleanup);

    if (app) {
        app.set("mongoose", mongoose);
    }
};

function cleanup() {
    mongoose.connection.close(function () {
        process.exit(0);
    });
}