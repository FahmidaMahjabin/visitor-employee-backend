const mongoose = require('mongoose');
const Employee = require("./model/employee");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json())
const administratorRoute = require("./controller/administrator");
const visitorRoute = require("./controller/visitor");
require('dotenv').config()
port = process.env.PORT || 5000;
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.PASSWORD}@cluster0.dfsqs.mongodb.net/?retryWrites=true&w=majority`)
app.use("/", administratorRoute)
app.use("/visitor", visitorRoute)



app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})