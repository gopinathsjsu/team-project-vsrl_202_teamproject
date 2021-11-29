import React from "react";
import {useState} from 'react'
import { Button, FormControl, InputGroup, Form } from "react-bootstrap";
import {showFlights} from "./apicalls/FlightApiCalls"
import FlightSelection from "./FlightSelection";

const BookFlight=()=> {
    const [departureDate, setDepartureDate] = useState(new Date().getDate());
    const [arrivalDate, setArrivalDate] = useState(new Date().getDate());
    const [fromDestination, setFromDestination] = useState("");
    const [toDestination, setToDestination] = useState("")
    const [redirect, setRedirect] = useState(false)
    const [flightData, setFlightData] = useState();
    const ShowFlights =event=>{
      event.preventDefault();
      showFlights({
        "arrivalLocation": toDestination,
        "departureLocation": fromDestination,
        "arrivalDate": arrivalDate,
        "departureDate": departureDate
      })
      .then(data=>{
        // if(data.error)
        // {
        //   console.log(data.error)
        // }
        // else
        // {
          setFlightData(data);
          setRedirect(true);
          // return(
          //   <FlightSelection data={data}/>
          // )
        //}
      })
    }

    // const performRedirect = () =>{
    //   if(didRedirect)
    //   {
    //     return <Redirect to="/flights/fareSelection"/>
    //   }
    // }
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          value={fromDestination}
          placeholder="From"
          onChange={(e)=>setFromDestination(e.target.value)}
        />
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          value={toDestination}
          placeholder="To"
          onChange={(e)=>setToDestination(e.target.value)}
        />
        <Form.Control
          type="date"
          placeholder="Departure"
          value={departureDate}
          defaultValue={new Date().getDate()}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
        <Form.Control
          type="date"
          placeholder="Arrival"
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
        />
        {/* <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Passanger"
        /> */}
      </InputGroup>
      <Button style={{backgroundColor: "#024", color: 'white'}} variant="outline-secondary" id="button-addon1" onClick={ShowFlights}>
        Show Flights
      </Button>
      {/* {performRedirect()}  */}
      {redirect && <FlightSelection data={flightData}/>}
    </div>
  );
}
export default BookFlight;
