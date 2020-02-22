const express = require('express') ; 
const app = express() ; 
const employeeRoute = express.Router() ; 

//Employee model
let Employee = require('../models/Employee') //Schema of an Employee

//Add Employee
employeeRoute.route('/empolyee').post((req, res, next) => {
    Employee.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
});

// Get All Employees
employeeRoute.route('/empolyee').get((req, res) => {
    Employee.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  // Get single employee
employeeRoute.route('/empolyee/:id').get((req, res) => {
    Employee.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
// Update employee
employeeRoute.route('/empolyee/:id').put((req, res, next) => {
    Employee.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, (error, data) => {
      if (error) {
        return next(error);
        console.log(error)
      } else {
        res.json(data)
        console.log('Data updated successfully')
      }
    })
  })

  // Delete employee
employeeRoute.route('/empolyee/:id').delete((req, res, next) => {
    Employee.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })

module.exports = employeeRoute ; 