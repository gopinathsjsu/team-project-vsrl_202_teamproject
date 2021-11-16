import React,{useState} from 'react'
import "../css/Header.css"
import { Tab, Tabs, Container } from 'react-bootstrap'
import BookFlight from "../components/BookFlight";
import MyTrips from "../components/MyTrips";
import Checkin from "../components/Checkin";
import FlightStatus from '../components/FlightStatus';

const Header = ()=>{
    const [key, setKey] = useState('Book');

    return (
        <div className="header" style={{height: "800px"}}>
            <div style={{padding: 10}}></div>
            <Container>
                <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                color="var(--primary1)"
                className="mb-3"
                >
                    <Tab eventKey="Book" title="Book">
                        <BookFlight/>
                    </Tab>
                    <Tab eventKey="MyTrips" title="My Trips">
                        <MyTrips/>
                    </Tab>
                    <Tab eventKey="Check-in" title="Check-in">
                        {/* <Sonnet /> */}
                        <Checkin/>
                    </Tab>
                    <Tab eventKey="status" title="Flight status">
                        {/* <Sonnet /> */}
                        <FlightStatus/>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    )
}

export default Header;
