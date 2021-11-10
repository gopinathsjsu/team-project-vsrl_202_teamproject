import React from "react";
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

export default function FlightStatus() {
  return (
    <div className="my-trip-line">
      <InputGroup>
        <FormControl
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder="Flight number"
        />
        <Form.Control
          type="date"
          name="duedate"
        //   placeholder="Due date"
          value={"9 November"}
        //   onChange={(e) => setDate(e.target.value)}
        />
      </InputGroup>
      <Button style={{ marginLeft: "4px" }}>Search flights</Button>
    </div>
  );
}
