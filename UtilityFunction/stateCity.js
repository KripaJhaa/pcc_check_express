 const mongoose = require('mongoose')
 const stateCityList = mongoose.model("state_cities", {});

 module.exports = {

     getCity(item) {
         console.log(item + ' cities requested')
         return stateCityList.findOne({
             state: item
         }, {
             _id: 0,
             "city": 1
         })
     },

     getState() {
         console.log('states requested')
         return stateCityList.find({}, {
             _id: 0,
             "state": 1
         })
     }
 }