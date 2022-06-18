const mongoose = require('mongoose');
const Employee = require("./model/employee");
require('dotenv').config()
console.log(process.env)
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.PASSWORD}@cluster0.dfsqs.mongodb.net/?retryWrites=true&w=majority`)

async function run(){
    const employee1 = await Employee.create(
        {
            name: "Fahmida",
            dateOfJoin:4-5-2020,
            slotes:[
                "9.00-9.30AM",
                "10.00-10.30AM",
                "1.00-1.30PM"
            ] 
                
             
        }
    )
    console.log(employee1)
}
run().catch(console.error)