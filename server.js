const express = require('express');
//const dbConnect = require('./db-mc').Mongo_Client;
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();


app.use(cors());
app.use(express.json());
app.use(bodyParser());
require('./db')(app); //initializing mongoose db

//connecting to mongo-client
//dbConnect.connectDB();

var port = Number(process.env.PORT || 8802);

//initializing app which is inside controller
var appInit = require('./controllers/search.controller').MainClass; //extracting perticular
console.log('logging appinit', appInit)
appInit.init(app);

var server = app.listen(port, (err) => {
    if (!err)
        console.log('Listening on port %d ', server.address().port);
});