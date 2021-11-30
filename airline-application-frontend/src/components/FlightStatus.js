import React,{useState} from "react";
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import {showFlight} from "./apicalls/FlightApiCalls"
import FlightSelection from "./FlightSelection";
import { isAuthenticated } from '../authHelper/index';

export default function FlightStatus() {
  const [flightNumber,setFlightNumber] = useState();
  const [redirect, setRedirect] = useState(false);
  const [flightData, setFlightData] = useState();
  const {user} = isAuthenticated();
  const [showSelect, setShowSelect] = useState();

  const SearchFlight = event=>{
    event.preventDefault();
    showFlight({
      "flightNumber":flightNumber,
      "userId":user._id
    })
    .then(data=>{
        setFlightData(data);
        setShowSelect(false);
          setRedirect(true);
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
                placeholder="Flight number"
                value={flightNumber}
                onChange={(e)=>setFlightNumber(e.target.value)}
              />
            </InputGroup>
          </div>
          <div class="col-md-4">
            <Button onClick={SearchFlight} style={{ marginLeft: "4px",backgroundColor:"#024" }}>Search flight</Button>
          </div>
        </div>
        <div class="row mt-5">
            <div className="myFlights">
            {redirect && <FlightSelection data={flightData} showSelect={false} showCancel={false} flightNumber={flightNumber}/>}
            </div>
        </div>
      </div>
    </div>
  );
}
