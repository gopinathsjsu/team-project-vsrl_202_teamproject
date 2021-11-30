import React,{useState} from 'react'
import Base from "../core/Base";
import {isAuthenticated} from "../authHelper/index"
import {Link} from 'react-router-dom';
import {cancelFlightAPI} from './adminapicall';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Alert from "@material-ui/lab/Alert";
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

const CancelFlight =()=>{
    const [flightNumber,setFlightNumber] = useState("")
    const [cancelSuccess, setCancelSuccess] = useState(false);
    const {user,token} = isAuthenticated();
    const [ticketNumber,setTicketNumber] = useState();
    const [open, setOpen] = React.useState(true);
    const CancelFlight = event=>{
        event.preventDefault();
        cancelFlightAPI({
          "flightNumber":flightNumber,
          })
        .then(data=>{
            //setFlightData(data);
            setCancelSuccess(true);
        })
      }

   
    return (
        <Base title=" " description=" " className="container p-4">
             <p className="login-text">Create Flight</p>
             <div class="container">
      <div class="row">
          <div class="col-md-8">
            <InputGroup>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Ticket Number"
                value={ticketNumber}
                onChange={(e)=>setFlightNumber(e.target.value)}
              />
            </InputGroup>
          </div>
          <div class="col-md-4">
            <Button onClick={CancelFlight} style={{ marginLeft: "4px",backgroundColor:"#024" }}>Cancel Booking</Button>
          </div>
        </div>
        <div class="row mt-5">
            <div className="myFlights">
           
            <div>
             <b> {cancelSuccess ? <Collapse in={open}> <Alert action={<IconButton aria-label="close" color="inherit" size="small" onClick={() => {setOpen(false);}}></IconButton>}sx={{ mb: 2 }}>Flight is cancelled successfully</Alert></Collapse>  : <div></div>}</b> 
             {/* <Alert onClose={() => {setOpen(false);}} severity="info">payment successful</Alert> */}
            </div>
            </div>
        </div>
      </div>
        </Base>
    )
}

export default CancelFlight;