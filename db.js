var Mongoose = require('mongoose')
var url = 'mongodb://13.232.174.178:27017/EChecks';
Mongoose.connect(url);

var schema = Mongoose.Schema

var ModelSchema = new schema();

var m = Mongoose.model('echecksdatas', ModelSchema)
m.count({}, (err, result) => {
    if (!err)
        console.log(result)
})