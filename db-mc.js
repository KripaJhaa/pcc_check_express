const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';

class Mongo_Client {

    connectDB() {
        console.log("Mongo Called...")

        MongoClient.connect(url, (err, db) => {
            if (!err) {
                const state = db
                console.log("Connected successfully to server");
            } else {
                const state = null
                console.log("Unable to Connect Mongo-server");
            }
        })
    }

    getDB() {
        console.log(" db...")
        return state
    }
}

module.exports.Mongo_Client = new Mongo_Client();