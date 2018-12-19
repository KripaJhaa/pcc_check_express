const pccModel = require('../Models/PccModel')

const save = (data) => {
    const pccModel_Obj = new pccModel(data);
    return pccModel_Obj.save();
}

module.exports = {
    save
};