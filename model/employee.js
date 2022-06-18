const mongoose = require('mongoose');
const employeeCollection = new mongoose.Schema(
    {
        name: String,
        dateOfJoin: Date,
        slotes: [String],
        visitors: [mongoose.SchemaTypes.ObjectId]
    }
)
module.exports  = mongoose.model("Employee", employeeCollection)