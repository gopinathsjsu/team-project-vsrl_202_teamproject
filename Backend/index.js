require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes
const adminRoutes = require("./Routes/adminRoute");
const authRoutes = require("./Routes/authRoute");
const userRoutes = require("./Routes/userRoute");

//DB Connection
const env = process.env.NODE_ENV || 'development';


mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true
    }).then(() => {
        console.log("DB CONNECTED");
    }).catch(console.log("DB CONNECTED FAILED"))

//PORT
const port = process.env.PORT || 8001;

app.listen(port, () => {
    console.log(`app is running at ${port}`);
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use("/api", adminRoutes);
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api/showFlight", ()=>{
    
})

module.exports = app;