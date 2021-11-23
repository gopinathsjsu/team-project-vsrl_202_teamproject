import React, { Component } from "react";
import {useState,useParams } from "react";
import {Container,Row,Col } from 'react-bootstrap';
import "../App.css";
import { Link } from "react-router-dom";
import "../css/FlightBooking.css";
import { Redirect } from 'react-router';
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

export default function Payment(props) {
    console.log("props");
    console.log(props);
    //const { fromNotifications } = this.props.location.state;
    var data = props.location.state.flightData;
    console.log("fromnotify"+data);
   // Axios.defaults.withCredentials = true;
    const [registered, setRegisterd] = useState(false);
     const pay = () => {
    //   if (
    //     userDetails.password.trim().length < 5 ||
    //     userDetails.first_name.trim() === "" ||
    //     userDetails.last_name.trim() === "" ||
    //     userDetails.city.trim() === "" ||
    //     userDetails.street.trim() === "" ||
    //     userDetails.email_id.trim() === "" ||
    //     userDetails.zip_code.length < 5
    //   ) {
    //     setMessage("Please fill all fields");
    //   } else if (
    //     userDetails.email_id.includes(" ") ||
    //     userDetails.zip_code.includes(" ") ||
    //     userDetails.password.includes(" ")
    //   ) {
    //     setMessage("Space character not allowed in zip_code, password, email_id");
    //   } else if (
    //     dependentCount > 0 && validateDependentInfo()
    //   ){
    //     setMessage("invalid dependents details");
    //   } else {
    //     Axios.post("http://localhost:3001/register", {
    //       userDetails,dependentsInfo
    //     })
    //       .then((response) => {
    //         setMessage(
    //           'Your User ID is "' +
    //             response.data.user_id +
    //             '" Contact admin for approval'
    //         );
    //         setRegisterd(true);
    //       })
    //       .catch((error) => {
    //         setMessage(error.response.data.err);
    //         setRegisterd(false);
    //       });
    //   }
    };
  
    // if (registered) {
    //   return (
    //     <div className="main">
    //       <h1 style={{ textAlign: "center" }}> hello</h1>
    //       {/* <Link to="/login" className="button-xlarge pure-button">
    //         Go to Login Page
    //       </Link> */}
    //     </div>
    //   );
    // }
    return (
        <Container fluid="sm">
        <h1>Book Flight</h1>
      <div>
      
        <FormGroup>
        <Row md={3}>
           {/* <Col></Col>
           <Col>  */}
          <FormControl>
            <TextField
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
          <Row  className="mb-10" md={3}>
            <TextField
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
            </Row>
          </FormControl>
          <FormControl>
          <Row  className="mb-10" md={3}>
            <TextField
            //   helperText={invalid.first_name ? "1-25 characters" : ""}
              id="card-number"
              label="Expiration Month/Year"
              type="text"
              className="row-padding"
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
            </Row>
          </FormControl>
          <FormControl>
          <Row  className="mb-10" md={3}>
            <TextField
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
            </Row>
          </FormControl>
       
          <FormControl>
          <Row  className="mb-10" md={3}>
          <div>
            <div className="pure-u-1-6"></div>
            <p></p>
            <Button variant="contained" color="primary" className="pure-u-1-6" onClick={pay}>
              Pay
            </Button>
           </div>
           </Row>
          </FormControl>
          {/* {message && <Alert severity="error">{message}</Alert>} */}
        </FormGroup>
      </div>
      </Container>
    );
  }
  

