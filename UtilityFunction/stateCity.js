 const mongoose = require('mongoose')
 const stateCityList = mongoose.model("state_cities", {});

 const getCity = (item) => {
     console.log(item);

     return stateCityList.find({
         state: item
     });

 }
 const getState = (item) => {
     console.log(item);

     return stateCityList.find({

     }, {
         _id: 0,
         "state": 1
     });

 }

 module.exports = {
     getState,
     getCity
 }