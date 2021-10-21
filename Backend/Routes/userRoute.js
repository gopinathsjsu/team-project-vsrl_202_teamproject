const express = require("express");
const router = express.Router();

// const{getUserById}= require("../controllers/user");
// const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
// const {getQuestionPaperById, getAllQuestionPapers, createQuestionPaper, getQuestionPaper, deleteQuestionPaper,updateQuestionPaper} = require("../controllers/questionPaper");
// const {SavePaperJson,GetPaperJson} = require("../controllers/SurveyCreator")
// const {SavePaperResponse} = require("../controllers/userResponse")

// router.param("questionPaperId", getQuestionPaperById);
const{bookFlight, getCurrentFlights}= require("../controllers/userController");

router.param("userId",getUserById);
router.post("/user/bookFlight/:userId/:flightId",isSignedIn,isAuthenticated, bookFlight);
router.post("/user/bookFlight/payments/:userId/:flightId",isSignedIn,isAuthenticated, bookFlight);
router.get("/user/currentFlights/:userId/:flightId", isSignedIn,isAuthenticated, getCurrentFlights);

module.exports = router;