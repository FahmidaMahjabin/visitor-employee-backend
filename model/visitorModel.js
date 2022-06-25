const mongoose = require('mongoose');
const visitor =new mongoose.Schema({
    name:{
        type: String,
        required: true,
    }

})
module.exports = mongoose.model("Visitor",visitor )