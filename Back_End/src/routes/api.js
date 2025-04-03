const express = require("express")

const AdminController = require('../controllers/AdminController')
const CustomerSupportController = require('../controllers/CustomerSupportController')
const JobController = require("../controllers/JobController");
const PaymentController = require("../controllers/PaymentController");


const router = express.Router()

//Admin
router.get('/Users',AdminController.getAllUsers); // Route to get all users
router.get('/Drivers',AdminController.getAllDrivers); // Route to get all drivers
router.patch("/users/:id/suspend", AdminController.suspendUser); // Route to suspend a user
router.patch("/drivers/:id/approve", AdminController.approveDriver); // Route to approve a driver

//CustomerSupport
router.post("/tickets", CustomerSupportController.createTicket); // Route to create a support ticket
router.get("/getTickets", CustomerSupportController.getTickets); // Route to get all support tickets
router.patch("/tickets/:id/status", CustomerSupportController.updateTicketStatus); // Route to update the status of a support ticket

//Job
router.post("/create", JobController.createJob); // Route to create a job
router.get("/getJobs", JobController.getJobs); // Route to get all jobs
router.post("/:jobId/apply", JobController.applyForJob); // Route to apply for a job
router.delete("/:id", JobController.deleteJob); // Route to delete a job

//Payment
router.post("/initiate", PaymentController.initiatePayment); // Route to initiate payment
router.get("/:paymentId/verify", PaymentController.verifyPayment); // Route to verify payment
router.get("/history/:userId", PaymentController.getPaymentHistory); // Route to get payment history








module.exports = router