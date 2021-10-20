const express = require("express");
const router = express.Router();
const{bookFlight}= require("../controllers/userController");
router.param("userId",getUserById);
router.post("/user/bookFlight/:userId/:flightId",isSignedIn,isAuthenticated, bookFlight);
module.exports = router;