import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import '../css/MyTrips.css'

export default function MyTrips() {
  return (
    <div>
      <h6 className="d-flex align-left">Manage your upcoming trip</h6>
      <div className="my-trip-line">
        <InputGroup>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder="From"
          />
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            placeholder="From"
          />
        </InputGroup>
        <Button style={{marginLeft: "4px"}}>Retrieve Booking</Button>
      </div>
    </div>
  );
}
