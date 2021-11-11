const express = require("express");
const router = express.Router();

// const{getUserById}= require("../controllers/user");
// const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
// const {getQuestionPaperById, getAllQuestionPapers, createQuestionPaper, getQuestionPaper, deleteQuestionPaper,updateQuestionPaper} = require("../controllers/questionPaper");
// const {SavePaperJson,GetPaperJson} = require("../controllers/SurveyCreator")
// const {SavePaperResponse} = require("../controllers/userResponse")

// router.param("questionPaperId", getQuestionPaperById);

const{bookFlight, getUserById,getCurrentFlights,showFlights,showFlight}= require("../controllers/userController");
const{isAuthenticated} = require("../Controllers/authController")
const{getFlightById}= require("../controllers/adminController");

router.param("userId",getUserById);
router.param("flightId",getFlightById);
router.post("/user/bookFlight",isAuthenticated, bookFlight);
router.post("/user/bookFlight/payments/:userId/:flightId",isAuthenticated, bookFlight);
router.get("/user/currentFlights/:userId/:flightId",isAuthenticated, getCurrentFlights);
router.post("/user/showFlights", showFlights);
router.post("/user/showFlight", showFlight);

module.exports = router;