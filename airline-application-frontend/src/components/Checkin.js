import React from 'react'
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

const Checkin=()=> {
    return (
        <div className="my-trip-line">
      <InputGroup>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Booking Reference"
        />
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Last name"
        />
      </InputGroup>
      <Button style={{ marginLeft: "4px" }}>Check-in</Button>
    </div>
    )
}
export default Checkin;