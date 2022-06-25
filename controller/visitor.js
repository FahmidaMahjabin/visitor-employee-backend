console.log("visitor file")
const Visitor = require("../model/visitorModel");
const Employee = require("../model/employee");
const express = require('express');
const visitorRoute = express.Router();
// take a slot
visitorRoute.post("/slots", async(req, res) =>{
    const {employeeID, expectedSlot, visitorID} =  req.body;
    const employee = await Employee.findById(employeeID);
    if(employee){
        const availableSlot = employee.slots.find(slot => slot === expectedSlot);
        if(availableSlot){
            employee.visitors.push(visitorID);
            employee.slots = employee.slots.filter(slot => slot !== availableSlot)
            res.send(true)
        }
        res.send(false)

    }
    res.send(false)
})
module.exports = visitorRoute