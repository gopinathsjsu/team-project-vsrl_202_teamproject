import React, { Component } from "react";
import { useState, useParams } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "../App.css";
import { Link } from "react-router-dom";
import "../css/FlightBooking.css";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';


import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import {getUserData,bookAndPayFlight} from "./apicalls/FlightApiCalls";
export default function Payment(props) {
  const [userData, setUserData] = useState("");
  const [paymentSuccess, SetPaymentSuccess] = useState("");
  const [open, setOpen] = React.useState(true);
  var data = props.location.state.flightData; 
  console.log(props);
  var price=props.location.state.flightData.flightData.price * props.location.state.flightData.clicks;
  var userId="619611cef02cb6d7493e623e";
  var rewardPoints=0;
  const getUser=()=>{
    // event.preventDefault();
    getUserData({
      userId     
    })
    .then(data=>{
      console.log("data");
      console.log(data);
      setUserData(data);
      rewardPoints=data.rewardPoints;
     // console.log("userdata");
      //console.log(userData);
      //console.log(userData.data.rewardPoints);
    })
  }

  const bookAndPay=()=>{
    // event.preventDefault();
    bookAndPayFlight({
      "userId": userId,
      "flightId": data.flightData.flightId,
      "class":"Economy",
      "passengers":props.location.state.flightData.passengers,
      "price":price,
      "numberOfPassengers":props.location.state.flightData.clicks,
      "rewardPoints":"35"
    })
    .then(data=>{
      console.log("data");
      console.log(data);
      SetPaymentSuccess(true);
     // setUserData(data);
      //rewardPoints=data.rewardPoints;
     // console.log("userdata");
      //console.log(userData);
      //console.log(userData.data.rewardPoints);
    })
  }
  
  price=price+0.35*(price);
  const [RewarPointsSelected, setRewardPointsSelectedStatus] = useState(false);
  const [registered, setRegisterd] = useState(false);
  const pay = () => {}
    
  return (
    <Container fluid="sm">
      <h1>Book Flight</h1>
      <div>
        <Row>
          <Col>
            <Card style={{ width: '25rem' }}>
              <Card.Body>
                <Card.Title>Pay with card</Card.Title>

                <FormGroup>
                  <Row md={3}>
                    {/* <Col></Col>
           <Col>  */}
                    <FormControl>
                      <TextField className="row-alignment"
                        //   helperText={invalid.first_name ? "1-25 characters" : ""}
                        id="customer-name"
                        label="Customer Name"
                        type="text"
                        required
                        //   error={invalid.first_name}
                        onChange={(e) => {
                          const validation =
                            e.target.value.length > 25 || e.target.value === ""
                              ? true
                              : false;
                          // setInvalid({ ...invalid, first_name: validation });
                          // setUserDetails({ ...userDetails, first_name: e.target.value });
                        }}
                      />

                    </FormControl>
                    {/* </Col>*/}
                  </Row>
                  <FormControl>
                   
                      <TextField className="row-alignment"
                        //   helperText={invalid.first_name ? "1-25 characters" : ""}
                        id="card-number"
                        label="Card Number"
                        type="text"
                        required
                        //   error={invalid.first_name}
                        onChange={(e) => {
                          const validation =
                            e.target.value.length > 25 || e.target.value === ""
                              ? true
                              : false;
                          // setInvalid({ ...invalid, first_name: validation });
                          // setUserDetails({ ...userDetails, first_name: e.target.value });
                        }}
                      />
                    
                  </FormControl>
                  <FormControl>
                    
                      <TextField className="row-alignment"
                        //   helperText={invalid.first_name ? "1-25 characters" : ""}
                        id="card-number"
                        label="Expiration Month/Year"
                        type="text"                        
                        required
                        //   error={invalid.first_name}
                        onChange={(e) => {
                          const validation =
                            e.target.value.length > 25 || e.target.value === ""
                              ? true
                              : false;
                          // setInvalid({ ...invalid, first_name: validation });
                          // setUserDetails({ ...userDetails, first_name: e.target.value });
                        }}
                      />
                    
                  </FormControl>
                  <FormControl>
                    
                      <TextField className="row-alignment"
                        //   helperText={invalid.first_name ? "1-25 characters" : ""}
                        id="card-number"
                        label="CVV"
                        type="text"
                        required
                        //   error={invalid.first_name}
                        onChange={(e) => {
                          const validation =
                            e.target.value.length > 25 || e.target.value === ""
                              ? true
                              : false;
                          // setInvalid({ ...invalid, first_name: validation });
                          // setUserDetails({ ...userDetails, first_name: e.target.value });
                        }}
                      />
                    
                  </FormControl>

                  {/* <FormControl> */}
                  
                  {/* </FormControl> */}
                  {/* {message && <Alert severity="error">{message}</Alert>} */}

                </FormGroup>

              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{width:"25rem"}}>
              <Card.Header as="h5">Order Summary</Card.Header>
              <Card.Body>
                <Card.Title>Payment Details:</Card.Title>
                <Card.Text>
                  <Row md={2}>
                    <Col>Passenger(s)
                    </Col>
                   
                    <Col md={{ span: 2, offset: 3 }}>{props.location.state.flightData.clicks}</Col>
                  </Row>
                  <Row md={3}>
                    <Col>Price
                    </Col>
                   <Col></Col>
                    <Col md={{ span: 2, offset: 1 }}>{props.location.state.flightData.flightData.price}</Col>
                  </Row>
                </Card.Text>
               
               
                {/* <Button variant="contained" color="primary" className="pure-u-1-6" onClick={pay}> */}
              </Card.Body>
              <Card.Footer className="text-muted">
                <Row md={2}>
                  <Col>
                Total(Including Tax)
                  </Col><Col md={{ span: 2, offset: 3 }} className="col-padding">${price}</Col>
                </Row>
                <Row>
                  <Form> 
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check 
                    type="checkbox" 
                    label="Apply Reward Points"
                    onChange={(e) => {
                      const isChecked =e.target.checked;
                      getUser();
                      //applyReward=isChecked;
                      setRewardPointsSelectedStatus(isChecked);
                     // mileagePoints                        
                      // setInvalid({ ...invalid, first_name: validation });
                      // setUserDetails({ ...userDetails, first_name: e.target.value });
                    }}
                    id="chkApplyReward" />
                </Form.Group></Form></Row>
                <Row md={2}><Col>Adjusted Total</Col><Col md={{ span: 2, offset: 3 }}>${RewarPointsSelected?(price-rewardPoints):price}</Col></Row>
                </Card.Footer>
             
            </Card>
            <Button variant="primary" color="primary" style={{backgroundColor:"#0d6efd"}} className="pure-u-1-6"
            onClick={(e)=>{
              bookAndPay();
             
            }}
            
            >Pay</Button>
            <div>
             <b>{paymentSuccess ? <Collapse in={open}> <Alert action={<IconButton aria-label="close" color="inherit" size="small" onClick={() => {setOpen(false);}}></IconButton>}sx={{ mb: 2 }}>Payment successful!</Alert></Collapse>  : <div></div>}</b> 
             {/* <Alert onClose={() => {setOpen(false);}} severity="info">payment successful</Alert> */}
            </div>
           
          </Col>
        </Row>
      </div>
     
    </Container >
     
  );
  
  
}


