import React,{useState} from 'react'
import "../css/Header.css"
import { Tab, Tabs, Container } from 'react-bootstrap'
import BookFlight from "../components/BookFlight";
import MyTrips from "../components/MyTrips";
import Checkin from "../components/Checkin";
import FlightStatus from '../components/FlightStatus';
import CancelBooking from '../components/CancelBooking';

const Header = ()=>{
    const [key, setKey] = useState('Book');

    return (
        <div className="header" style={{height: "800px"}}>
            <div style={{padding: 10}}>
            <Container>
                <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                color="var(--primary1)"
                className="mb-3"
                >
                    <Tab eventKey="Book" title="Book" className="active-selected">
                        <BookFlight/>
                    </Tab>
                  
                    <Tab eventKey="status" title="Flight status">
                        {/* <Sonnet /> */}
                        <FlightStatus/>
                    </Tab>
                    <Tab eventKey="CancelBooking" title="Cancel Booking" className="active-selected">
                        <CancelBooking/>
                    </Tab>

                </Tabs>
            </Container>
            </div>
        </div>
    )
}

export default Header;
