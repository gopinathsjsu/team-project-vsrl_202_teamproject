import React, { Component } from "react";
import { Form,Button,Container,Row,Col } from "react-bootstrap";
import { signin,authenticate, isAuthenticated } from "../authHelper";
import { useState } from "react";
import { signup } from "../authHelper";
import { Link } from "react-router-dom";

const SignUp =()=> {


    const [values,setValues]=useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        error:"",
        success:false
    });
    
    const {firstname,lastname,email,password,error,success}=values;
    
    const handleChange=name=>event=>{
        setValues({...values,error:false,[name]:event.target.value})
    }

    const onSubmit = event =>{
        event.preventDefault();
        setValues({...values,error:false});
         signup({firstname,lastname,email,password})
         .then(data=>{
             if(data.error){
                 setValues({...values,error:data.error,success:false});
             }
             else{
                 setValues({...values,firstname:"",lastname:"",email:"",password:"",success:true});
             }
         })
         .catch(console.log("Error in signup "))
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
            <Container>
                    <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">SignUp</h1>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                    
                    <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>

                    <Form.Control type="text" value={firstname} onChange={handleChange("firstname")} placeholder="Enter you first name" />
                        
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>

                    <Form.Control type="text" value={lastname} onChange={handleChange("lastnamename")} placeholder="Enter your last name" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>

                    <Form.Control type="text"  placeholder="Enter your address here" />
                        
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>

                    <Form.Control type="text" placeholder="Enter your phone number" />
                        
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
                    
                    <Button variant="success btn-block" onClick={onSubmit} type="submit">
                        SignUp
                    </Button>
                </Form>
                        </Col>
                    </Row>
                    
                </Container>


        )
        }
    export default SignUp;
