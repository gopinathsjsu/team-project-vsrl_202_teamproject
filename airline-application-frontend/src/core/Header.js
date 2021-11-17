import React,{useState} from 'react'
import "../css/Header.css"
import { Tab, Tabs, Container } from 'react-bootstrap'
import BookFlight from "../components/BookFlight";
import MyTrips from "../components/MyTrips";
import Checkin from "../components/Checkin";
import FlightStatus from '../components/FlightStatus';
import Login from '../components/login.component';
import SignUp from '../components/signup.component';

const Header = ()=>{
    const [key, setKey] = useState('Book');

    return (
        <div className="header" >
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

                    
                    <Tab eventKey="login" title="Login">
                        {/* <Sonnet /> */}
                        <Login/>
                    </Tab>

                    <Tab eventKey="signup" title="SignUp">
                        {/* <Sonnet /> */}
                        <SignUp/>
                    </Tab>


                </Tabs>
            </Container>
        </div>
    )
}

export default Header;
