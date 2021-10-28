const express = require("express");
const router = express.Router();


const {createAirHostressDetails,createPassengerDetails,createPilotDetails,createFlight,editFlight,editFlights,getFlightById,deleteFlight,deleteFlights,getAllFlights,getFlight,getAllPassengers,getAllPilots,getAllAirhostress} = require("../Controllers/adminController");


router.param("flightId",getFlightById);

router.post("/admin/createFlight",createFlight);
router.post("/admin/editFlight",editFlight);
router.put("/admin/editFlights",editFlights);
router.delete("/admin/deleteFlight", deleteFlight);
router.delete("/admin/deleteFlights", deleteFlights);
router.get("/admin/getAllFlights",getAllFlights);
router.get("/admin/getFlight",getFlight);
router.get("/admin/flight/passengers/",getAllPassengers);
router.get("/admin/flight/pilots/",getAllPilots);
router.get("/admin/flight/airhostesses/",getAllAirhostress);
router.post("/admin/flight/createPassengers/",createPassengerDetails);
router.post("/admin/flight/createPilot/",createPilotDetails);
router.post("/admin/flight/createAirhostess/",createAirHostressDetails);


module.exports = router;