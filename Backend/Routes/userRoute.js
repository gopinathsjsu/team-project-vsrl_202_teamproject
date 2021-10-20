const express = require("express");
const router = express.Router();

// const{getUserById}= require("../controllers/user");
// const {isSignedIn,isAuthenticated,isAdmin} = require("../controllers/auth");
// const {getQuestionPaperById, getAllQuestionPapers, createQuestionPaper, getQuestionPaper, deleteQuestionPaper,updateQuestionPaper} = require("../controllers/questionPaper");
// const {SavePaperJson,GetPaperJson} = require("../controllers/SurveyCreator")
// const {SavePaperResponse} = require("../controllers/userResponse")

// router.param("questionPaperId", getQuestionPaperById);
const{bookFlight}= require("../controllers/userController");
router.param("userId",getUserById);
router.post("/user/bookFlight/:userId/:flightId",isSignedIn,isAuthenticated, bookFlight);
module.exports = router;