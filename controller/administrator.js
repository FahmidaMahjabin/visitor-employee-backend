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
    console.log("allEmployee:", allEmployee)
    res.send(allEmployee)
})

// remove an employee
administratorRoute.delete("/employee", async(req, res) =>{
    const id = req.params.id;
    console.log("id", id)
    const employeeToRemove = await Employee.findById(id);
    const employeeAfterRemoval = await Employee.deleteOne(employeeToRemove);
    res.send(employeeAfterRemoval)
})

// make employee active or inactive
administratorRoute.post("/employee/:id", async(req, res) =>{
    const id = req.params.id;
    // console.log("id:", id)
    const employee = await Employee.findById(id);

    const condition = employee.active;
    console.log("condition:", condition)
    employee.active = !condition;
    await employee.save();
    res.send(employee)
})

module.exports = administratorRoute;
