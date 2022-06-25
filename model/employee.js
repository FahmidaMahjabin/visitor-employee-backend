const mongoose = require('mongoose');
const employeeCollection = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,

        } ,
        active: {
            type: Boolean,
            default: true,
        },
        dateOfJoin: Date,
        slotes: [String],
        visitors: [mongoose.SchemaTypes.ObjectId]
    }
)
// employeeCollection.pre("save", function(next){

// })
module.exports  = mongoose.model("Employee", employeeCollection)