const db = require('../../db');
const utilityFunc = require('../../UtilityFunction/all_utilities')

module.exports.MainController = {


    async AddDetails(req, res) {
        //console.log(req.headers)
        console.log('inside search companies')
        console.log(req.body);

        try {
            const savedRes = await utilityFunc.crudPcc.save(req.body);
            res.send({
                "greeting": savedRes
            }).status(200);
        } catch (err) {
            res.send(err).status(402);
        }
    },
    async GetCity(req, res) {
        try {

            const response = await utilityFunc.stateCity.getCity(req.body.state)
            res.status(200).json(response);

        } catch (err) {

            res.status(402).json({
                "err": "occur"
            });
        }
    },
    async GetState(req, res) {

        try {
            const response = await utilityFunc.stateCity.getState()
            res.status(200).json(response);

        } catch (err) {
            res.send(err).status(402);
        }
    },
    async UpdateDetails(req, res) {
        console.log('inside get details')
        res.send({
            "greeting": 'bye'
        }).status(200);

    }


};