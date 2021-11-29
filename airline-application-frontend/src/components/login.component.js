import MyNavbar from "./NavBar";
import React, { Component,useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Form,Button,Container,Row,Col } from "react-bootstrap";
import { signin,authenticate,isAuthenticated } from "../authHelper";
import { Link,Redirect } from "react-router-dom";
import NavBar from "./NavBar"
import "../App.css"
 const Login=()=>{
            const [values,setValues]=useState({
                email:"",
                password:"",
                error:"",
                loading:false,
                didRedirect:false
            });
            
            const {email,password,error,loading,didRedirect }=values;
            const {user}=isAuthenticated();



            const handleChange=name=>event=>{
                setValues({...values,error:false,[name]:event.target.value})
            }

        
            const loadingMessage=()=>{
                return (
                    loading && (<div className="alert alert-info">
                        <h2>Loading...</h2>
                    </div>
                    )
                );
            }


            const errorMessage=()=>{
                return(
                    <div className="row">
                        <div className="col-md-6 offset-sm-3 text-left">
                            <div className="alert alert-danger" >
                                {error}
                            </div>
                        </div>
                    </div>
                );
            };



            const onSubmit = event =>{
                event.preventDefault();
                setValues({...values,error:false,loading:true});
                 signin({email,password})
                 .then(data=>{
                     if(data.error){
                         setValues({...values,error:data.error,loading:false});
                     }
                     else{
                         authenticate(data,()=>{
                             setValues({
                                 ...values,
                                 didRedirect:true
                             });
                         });
                     }
                 })
                 .catch(console.log("Error in signin "));
            };


            const performRedirect=()=>{
                if(didRedirect){
                    if(user && user.role===0){
                        return  <Redirect to="/" />
                    }
                    else if(user && user.role===1)
                        return <Redirect to="/admin/dashboard" />
                }
                // if(isAuthenticated()){
                //     return <Redirect to="/" />
                // }
            }
            
    
        return (
            
                <Container className="login" fluid style={{paddingLeft:0,paddingRight:0,paddingBottom:0,marginRight:0,marginLeft:0}}>
                    {/* {loadingMessage()} */}
                    {error && errorMessage()}
                    <NavBar/>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <p className="login-text">Login</p>
                        <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Label >Email address</Form.Label>

                    <Form.Control value={email} type="email" onChange={handleChange("email")} placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} type="password" placeholder="Password" onChange={handleChange("password")}  />
                    </Form.Group>
                    <div style={{paddingLeft:"188px"}}>
                    <Button variant="btn btn-success btn-block" style={{backgroundColor: "#024", color: "white"}} type="submit" onClick={onSubmit}>
                        Login
                       {/* <p className="text-white text-center">{JSON.stringify(values)}</p>  */}
                    </Button>
                    </div>
                   <Link to="/signup" className="signuplink-text"> No account? Signup</Link>
                    </Form>
                    {performRedirect()}
                    {/* <p className="text-white text-center"> {JSON.stringify(values)}</p> */}
                    </Col>
                    </Row>
                    
                </Container>
                
                
        );
    }
export default Login;