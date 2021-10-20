const express = require("express");
const router = express.Router();


const {createFlight,editFlight,editFlights,getFlightById,deleteFlight,deleteFlights,getAllFlights,getFlight} = require("../Controllers/adminController");


router.param("flightId",getFlightById);

router.post("/admin/createFlight",createFlight);
router.put("/admin/editFlight/:flightId",editFlight);
router.put("/admin/editFlights",editFlights);
router.delete("/admin/deleteFlight/:flightId", deleteFlight);
router.delete("/admin/deleteFlights", deleteFlights);
router.get("/admin/getAllFlights",getAllFlights);
router.get("/admin/getFlight",getFlight);
//router.post("/admin/getFlight/:flightId",getFlight);

module.exports = router;