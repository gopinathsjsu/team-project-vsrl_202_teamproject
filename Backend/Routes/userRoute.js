const express = require("express");
const router = express.Router();
const{bookFlight, getUserById}= require("../controllers/userController");
const{getFlightById}= require("../controllers/adminController");
router.param("userId",getUserById);
router.param("flightId",getFlightById);
router.post("/user/bookFlight/:userId/:flightId",isSignedIn,isAuthenticated, bookFlight);
module.exports = router;