import React,{useState} from "react";
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import {cancelFlightBookingAPI} from "./apicalls/FlightApiCalls"
import FlightSelection from "./FlightSelection";
import { isAuthenticated } from '../authHelper/index';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Alert from "@material-ui/lab/Alert";
export default function CancelBooking() {
  const [ticketNumber,setTicketNumber] = useState();
  const [cancelSuccess, setCancelSuccess] = useState(false);
  const [flightData, setFlightData] = useState();
  const {user} = isAuthenticated();
  const [open, setOpen] = React.useState(true);
  const CancelFlightBooking = event=>{
    event.preventDefault();
    cancelFlightBookingAPI({
      "ticketNumber":ticketNumber,
      "userId":user._id
    })
    .then(data=>{
        //setFlightData(data);
        setCancelSuccess(true);
    })
  }

  return (
    <div className="my-trip-line">
      <div class="container">
      <div class="row">
          <div class="col-md-8">
            <InputGroup>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                placeholder="Ticket Number"
                value={ticketNumber}
                onChange={(e)=>setTicketNumber(e.target.value)}
              />
            </InputGroup>
          </div>
          <div class="col-md-4">
            <Button onClick={CancelFlightBooking} style={{ marginLeft: "4px",backgroundColor:"#024" }}>Cancel Booking</Button>
          </div>
        </div>
        <div class="row mt-5">
            <div className="myFlights">
           
            <div>
             <b> {cancelSuccess ? <Collapse in={open}> <Alert action={<IconButton aria-label="close" color="inherit" size="small" onClick={() => {setOpen(false);}}></IconButton>}sx={{ mb: 2 }}>Your booking is cancelled successfully for TicketNumber:  {ticketNumber}</Alert></Collapse>  : <div></div>}</b> 
             {/* <Alert onClose={() => {setOpen(false);}} severity="info">payment successful</Alert> */}
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
