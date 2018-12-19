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
        // console.log('inside state module1q1', utilityFunc.stateCity.getState);

        try {
            const response = await utilityFunc.stateCity.getCity(req.body.state)
            res.send({
                "done": response
            })

        } catch (err) {
            res.send(err).status(402);
        }
    },
    async GetState(req, res) {
        // console.log('inside state module1q1', utilityFunc.stateCity.getState);

        try {
            const response = await utilityFunc.stateCity.getState()
            res.send({
                "done": response
            })

        } catch (err) {
            res.send(err).status(402);
        }
    },

    UpdateDetails(req, res) {
        console.log('inside get details')
        res.send({
            "greeting": 'bye'
        }).status(200);

    }


};