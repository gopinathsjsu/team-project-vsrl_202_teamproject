import MyNavbar from "./NavBar";
import React, { Component } from "react";
import { Form,Button,Container,Row,Col } from "react-bootstrap";
import { signin,authenticate, isAuthenticated } from "../authHelper";
import { useState } from "react";
import { signup } from "../authHelper";
import { Link,Redirect } from "react-router-dom";
import Select from "react-select";
import "../App.css";
import NavBar from "./NavBar";

const SignUp =()=> {


    const [values,setValues]=useState({
        firstName:"",
        lastName:"",
        address:"",
        phoneNumber:"",
        gender:"",
        email:"",
        password:"",
        confirmpassword:"",
        error:"",
        success:false,
        didRedirect:false
    });
    
    const {didRedirect,firstName,lastName,email,address,phoneNumber,gender,password,confirmpassword,error,success}=values;
    
    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit = event =>{
        event.preventDefault();
        if(password!=confirmpassword){
            setValues({...values,error:"Passwords do not match",success:false});
            return;
        }
        setValues({...values,error:false});
         signup({firstName,lastName,email,phoneNumber,password})
         .then(data=>{
             if(data.error){
                 setValues({...values,error:data.error,success:false});
             }
              else{
                  setValues({...values,didRedirect:true});
              }
         })
         .catch((err)=>console.log("Error in signup "+err))
    };

    const performRedirect=()=>{
        if(didRedirect){
                return  <Redirect to="/login" />
           
        }
        // if(isAuthenticated()){
        //     return <Redirect to="/" />
        // }
    }

    const successMessage=()=>{
       return(<div className="alert alert-success"
        style={{display:success? "":"none"}}>
            New account was created successfully!
            
            <Link to="/sign-in">Login Here</Link>
        </div>);
    }

    const errorMessage=()=>{
        return (
            <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <div className="alert alert-danger" >
                    {error}
                </div>
            </div>
        </div>);
    }

    const actions=[
        {label:"Male"},
        {label:"Female"}
    ];


        return (
            <div style={{overflowY:"auto"}}>
            <Container  className="signup-height" fluid style={{ marginRight:0,marginLeft:0,paddingLeft:0,paddingRight:0}}>
                    {/* <h1 className="shadow-sm p-3 login rounded" style={{color:"#024"}}>SignUp</h1> */}
                    
                    <NavBar/>
                    {error && errorMessage()}
                    {successMessage()}
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <p className="login-text">Sign up</p>
                    <Form >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>

                    <Form.Control type="text" value={firstName} onChange={handleChange("firstName")} placeholder="Enter you first name" />
                        
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>

                    <Form.Control type="text" value={lastName} onChange={handleChange("lastName")} placeholder="Enter your last name" />
                        
                    </Form.Group>

                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Gender</Form.Label>

                    
                    <Select type="text" value={gender} onChange={handleChange("gender")} placeholder="Select a gender" options={actions} />     
                    </Form.Group> */}

                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>

                    <Form.Control type="text" value={address} onChange={handleChange("address")} placeholder="Enter your address here" />
                        
                    </Form.Group> */}


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>

                    <Form.Control type="text" value={phoneNumber} onChange={handleChange("phoneNumber")} placeholder="Enter your phone number" />
                        
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>

                    <Form.Control type="email" value={email} placeholder="Enter email" value={email} 
                    onChange={handleChange("email")}/>
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} type="password" placeholder="Password" value={password}
                        onChange={handleChange("password")} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control value={confirmpassword} type="password" placeholder="Password" 
                        onChange={handleChange("confirmpassword")} />
                    </Form.Group>
                    <div style={{paddingLeft:"185px"}}>
                    <Button style={{backgroundColor: "#024", color: "white"}} variant="success btn-block" onClick={onSubmit} type="submit">
                        Sign Up
                    </Button>
                    </div>
                    <Link to="/login" className="signuplink-text"> Already have an account? Signin</Link>
                </Form>
                {performRedirect()}
                        </Col>
                    </Row>
                    
                </Container>
                <div class='content'></div>
                </div>
               
        )
        }
    export default SignUp;
