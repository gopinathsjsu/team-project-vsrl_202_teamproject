import MyNavbar from "./NavBar";
import React, { Component } from "react";
import { Form,Button,Container,Row,Col } from "react-bootstrap";
import { signin,authenticate, isAuthenticated } from "../authHelper";
import { useState } from "react";
import { signup } from "../authHelper";
import { Link } from "react-router-dom";

const SignUp =()=> {


    const [values,setValues]=useState({
        firstName:"",
        lastName:"",
        address:"",
        phoneNumber:"",
        email:"",
        password:"",
        error:"",
        success:false
    });
    
    const {firstName,lastName,email,address,phoneNumber,password,error,success}=values;
    
    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit = event =>{
        event.preventDefault();
        setValues({...values,error:false});
         signup({firstName,lastName,email,address,phoneNumber,password})
         .then(data=>{
             if(data.error){
                 setValues({...values,error:data.error,success:false});
             }
            //  else{
            //      setValues({...values,firstName:"",lastName:"",email:"",address:"",phone:"",password:"",success:true});
            //  }
         })
         .catch((err)=>console.log("Error in signup "+err))
    };



    const successMessage=()=>{
       return(<div className="alert alert-success"
        style={{display:success? "":"none"}}>
            New account was created successfully!
            
            <Link to="/sign-in">Login Here</Link>
        </div>);
    }

    const errorMessage=()=>{
        return (<div className="alert alert-danger"
        style={{display:error ? "":"none"}}>
            {error}
        </div>);
    }


        return (
            <Container fluid style={{backgroundColor: "#b5d2fd",marginRight:0,marginLeft:0,paddingLeft:0,paddingRight:0}}>
                 <MyNavbar />
                    <h1 className="shadow-sm mt-5 p-3 text-center rounded" style={{color:"#0D6EFD"}}>SignUp</h1>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    
                    <Form >

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>

                    <Form.Control type="text" value={firstName} onChange={handleChange("firstName")} placeholder="Enter you first name" />
                        
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>

                    <Form.Control type="text" value={lastName} onChange={handleChange("lastName")} placeholder="Enter your last name" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>

                    <Form.Control type="text" value={address} onChange={handleChange("address")} placeholder="Enter your address here" />
                        
                    </Form.Group>


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
                        <Form.Control value={password} type="password" placeholder="Password" 
                        onChange={handleChange("password")} />
                    </Form.Group>
                    
                    <Button style={{backgroundColor: "rgb(13, 110, 253)", color: "white"}} variant="success btn-block" onClick={onSubmit} type="submit">
                        SignUp
                    </Button>
                </Form>
                        </Col>
                    </Row>
                    
                </Container>


        )
        }
    export default SignUp;
