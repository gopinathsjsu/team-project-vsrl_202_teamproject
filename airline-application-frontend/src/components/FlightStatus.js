import React,{useState} from "react";
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import {showFlight} from "./apicalls/FlightApiCalls"
import FlightSelection from "./FlightSelection";

export default function FlightStatus() {
  const [flightNumber,setFlightNumber] = useState();
  const [redirect, setRedirect] = useState(false);
  const [flightData, setFlightData] = useState();
  const SearchFlight = event=>{
    event.preventDefault();
    showFlight({
      "flightNumber":flightNumber
    })
    .then(data=>{
        setFlightData(data);
          setRedirect(true);
    })
  }

  return (
    <div className="my-trip-line">
      <InputGroup>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Flight number"
          value={flightNumber}
          onChange={(e)=>setFlightNumber(e.target.value)}
        />
        
      </InputGroup>
      <Button onClick={SearchFlight} style={{ marginLeft: "4px" }}>Search flight</Button>
      {redirect && <FlightSelection data={flightData}/>}
    </div>
  );
}
