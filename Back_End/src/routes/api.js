const express = require("express")

const AdminController = require('../controllers/AdminController')
const CustomerSupportController = require('../controllers/CustomerSupportController')

const router = express.Router()

//Admin
router.get('/Users',AdminController.getAllUsers) // Route to get all users
router.get('/Drivers',AdminController.getAllDrivers) // Route to get all drivers
router.patch("/users/:id/suspend", AdminController.suspendUser) // Route to suspend a user
router.patch("/drivers/:id/approve", AdminController.approveDriver) // Route to approve a driver

//CustomerSupport










module.exports = router