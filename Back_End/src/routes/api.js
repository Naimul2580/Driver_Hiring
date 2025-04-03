const express = require("express");

const AdminController = require('../controllers/AdminController');
const CustomerSupportController = require('../controllers/CustomerSupportController');
const JobController = require("../controllers/JobController");
const PaymentController = require("../controllers/PaymentController");
const RideController = require("../controllers/RideController");
const UserController = require("../controllers/UserController");
const VehicleController = require("../controllers/VehicleController");
const VerificationController = require("../controllers/VerificationController");

const router = express.Router();

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


//Rider
router.post("/book", RideController.bookRide);// Route to book a ride
router.patch("/:rideId/accept", RideController.acceptRide);// Route to accept a ride
router.patch("/:rideId/status", RideController.updateRideStatus);// Route to update the status of a ride
router.delete("/:rideId", RideController.cancelRide);// Route to cancel a ride
router.get("/history/:userId", RideController.getRideHistory);// Route to get ride history


//User
router.get("/:id", UserController.getProfile);// Route to get user profile by ID
router.put("/:id", UserController.updateProfile);// Route to update user profile
router.delete("/:id", UserController.deleteAccount);// Route to delete user account
router.get("/", UserController.getAllUsers);// Route to get all users (Admin only)


//Vehicle
router.post("/add", VehicleController.addVehicle);// Route to add a vehicle
router.put("/:vehicleId", VehicleController.updateVehicle);// Route to update vehicle details
router.get("/:vehicleId", VehicleController.getVehicle);// Route to get vehicle details
router.delete("/:vehicleId", VehicleController.deleteVehicle);// Route to delete a vehicle


//Verification

router.post("/submit", VerificationController.submitDocument);// Route to submit a document for verification
router.patch("/:documentId/approve", VerificationController.approveDocument);// Route to approve a submitted document
router.get("/pending", VerificationController.getPendingVerifications);// Route to get all pending verifications



module.exports = router