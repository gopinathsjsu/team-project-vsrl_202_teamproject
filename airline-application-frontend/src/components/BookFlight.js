import React from "react";
import {useState} from 'react'
import { Button, FormControl, InputGroup, Form } from "react-bootstrap";

const BookFlight=()=> {
    const [date, setDate] = useState(new Date().getDate())
    const [arrival, setArrival] = useState(new Date())

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="From"
        />
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="To"
        />
        <Form.Control
          type="date"
          placeholder="Departure"
          value={date}
          defaultValue={new Date().getDate()}
          onChange={(e) => setDate(e.target.value)}
        />
        <Form.Control
          type="date"
          placeholder="Arrival"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)}
        />
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Passanger"
        />
      </InputGroup>
      <Button variant="outline-secondary" id="button-addon1">
        Show Flights
      </Button>
    </div>
  );
}
export default BookFlight;
