const dbroute = require('../../db-mc');

module.exports.MainController = {


    search_companies(req, res) {
        var company_search = req.params.company_name.toUpperCase();
        var db = dbroute.getDB().db('empdatastore');

        console.log('company_search', company_search);

        db.collection('company_search').find({
            'name': {
                $regex: ".*" + company_search + ".*"
            }
        }).toArray((err, docs) => {
            res.json(docs);
        });
    },

    get_details(req, res) {
        var comapany_name = req.body.company_name;
        var company_prefix = comapany_name.substring(0, 3).toLowerCase().trim();

        console.log('company_search in GetDetail', company_prefix);

        var db = dbroute.getDB().db('empdatastore');
        if (!db) return res.status(400).send("User not Found");

        db.collection(company_prefix).find({
            "name": "" + comapany_name
        }).toArray((err, result) => {
            console.log(JSON.stringify(result))
            res.json(result);
        });
    }


};