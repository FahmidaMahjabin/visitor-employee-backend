const mongoose = require('mongoose');
const Employee = require("./model/employee");
const express = require('express');
const app = express();
const administratorRoute = require("./controller/administrator")
require('dotenv').config()
port = process.env.PORT || 5000;
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.PASSWORD}@cluster0.dfsqs.mongodb.net/?retryWrites=true&w=majority`)
app.use("/", administratorRoute)



app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})