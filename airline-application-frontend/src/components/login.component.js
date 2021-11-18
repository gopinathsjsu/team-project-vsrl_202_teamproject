import MyNavbar from "./NavBar";
import React, { Component,useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Form,Button,Container,Row,Col } from "react-bootstrap";
import { signin,authenticate,isAuthenticated } from "../authHelper";
import { Link,Redirect } from "react-router-dom";

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
                    if(user && user.role===1){
                        return  <p>Redirect to admin</p>
                    }
                    else
                    return <p>Redirect to user</p>
                }
                if(isAuthenticated()){
                    return <Redirect to="/" />
                }
            }
            
    
        return (
            
                <Container>
                    <MyNavbar />
                    {/* {loadingMessage()} */}
                    {error && errorMessage()}
                    <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Login</h1>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label >Email address</Form.Label>

                    <Form.Control value={email} type="email" onChange={handleChange("email")} placeholder="Enter email" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} type="password" placeholder="Password" onChange={handleChange("password")}  />
                    </Form.Group>
                    
                    <Button variant="btn btn-success btn-block" type="submit" onClick={onSubmit}>
                        Login
                       {/* <p className="text-white text-center">{JSON.stringify(values)}</p>  */}
                    </Button>
                    
                    </Form>
                    {performRedirect()};
                    {/* <p className="text-white text-center"> {JSON.stringify(values)}</p> */}
                    </Col>
                    </Row>
                    
                </Container>
                
                
        );
    }
export default Login;