const express = require("express");
const router = express.Router();


const {createAirHostressDetails,createPassengerDetails,createPilotDetails,createFlight,editFlight,editFlights,getFlightById,deleteFlight,deleteFlights,getAllFlights,getFlight,passengerDetails,pilotDetails,airhostressDetails} = require("../Controllers/adminController");


router.param("flightId",getFlightById);

router.post("/admin/createFlight",createFlight);
router.put("/admin/editFlight/:flightId",editFlight);
router.put("/admin/editFlights",editFlights);
router.delete("/admin/deleteFlight/:flightId", deleteFlight);
router.delete("/admin/deleteFlights", deleteFlights);
router.get("/admin/getAllFlights",getAllFlights);
router.get("/admin/getFlight",getFlight);
router.get("/admin/flight/passengers/",passengerDetails);
router.get("/admin/flight/pilot/",pilotDetails);
router.get("/admin/flight/airhostess/",airhostressDetails);
router.post("/admin/flight/createPassengers/",createPassengerDetails);
router.post("/admin/flight/createPilot/",createPilotDetails);
router.post("/admin/flight/createAirhostess/",createAirHostressDetails);


module.exports = router;