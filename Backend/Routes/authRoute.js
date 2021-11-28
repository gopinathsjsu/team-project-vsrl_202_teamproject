var express=require("express");
var router=express.Router();

const{signin,signup,signout}=require("../controllers/authController");
const{check,validationResult}=require('express-validator');

router.post("/signup",[
    check("firstName","first name should be atleast 3 characters").isLength({min:3}),
    check("lastName","last name should be atleast 3 characters").isLength({min:3}),
    check("email","email is required..").isEmail(),
    check("password")
                    .isLength({min:6})
                    .withMessage("password must be atleast 6 characters")
                    .matches(/\d/)
                    .withMessage("must contain a number")
],signup);



router.post("/signin",[
    check("email","email is required...").isEmail(),
    check("password")
    .isLength({min:1})
    .withMessage("Please enter a password")
],signin);


router.get("/signout",signout);

module.exports=router;

