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

// get all employee list
administratorRoute.get("/employee", async(req, res) =>{
    const allEmployee = await Employee.find({});
    // console.log("allEmployee:", allEmployee)
    res.send(allEmployee)
})

// remove an employee
administratorRoute.delete("/employee", async(req, res) =>{
    const id = req.params;
    const employeeToRemove = await Employee.findById(id);
    const employeeAfterRemoval = await Employee.deleteOne(employeeToRemove);
    res.send(employeeAfterRemoval)
})

module.exports = administratorRoute;
