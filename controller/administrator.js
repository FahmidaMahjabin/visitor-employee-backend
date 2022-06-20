const Employee = require("../model/employee");
const express = require('express');
const administratorRoute = express.Router();
console.log("administrator file")
// add an employee;
administratorRoute.post("/employee", async(req, res)=>{
    const newEmployee = req.body;
    console.log("newEmployee:", newEmployee)
    const addedEmployee = await Employee.create(
        newEmployee
    )
    res.send()
})

module.exports = administratorRoute;
