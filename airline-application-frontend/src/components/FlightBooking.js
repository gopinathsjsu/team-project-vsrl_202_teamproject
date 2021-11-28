import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import moment from 'moment';
import Card from 'react-bootstrap/Card';
import "../css/FlightBooking.css";
import { Row, Col, Accordion, Container, useAccordionButton } from 'react-bootstrap';
import Select from 'react-select';
import { Link } from "react-router-dom";
import { Redirect } from 'react-router';

const actions = [
    { label: "Female", value: 1 },
    { label: "Male", value: 2 },
    { label: "Other", value: 3 }
];

const customStyles = {
    control: styles => ({
        ...styles,
        width: '360px', padding: '5px 0 7px 0'
    }),
    option: styles => ({
        ...styles,
        // width: '320%'
    }),
    menu: styles => ({
        ...styles,
        width: '360px'
    })

};

export default class FlightBooking extends Component {


    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            clicks: 0,
            show: true,
            openPayment:0,
            flightData:{},
            duration:""
        };
        
        this.IncrementItem = this.IncrementItem.bind(this);
        this.onPaymentClick = this.onPaymentClick.bind(this);
       // this.duration="";
        
        // this.data = props;
        var data = this.props.location.state.flightData;
        this.flightDetails = {
            arrLoc: data.arrivalLocation,
            deptLoc: data.departureLocation,
            arrTime: data.arrivalTime,
            deptTime: data.departureTime,
            depDate: data.departureDate,
            arrDate: data.arrivalDate,
            startTime: (data.departureDate + " " + data.departureTime),
            endTime: (data.arrivalDate + " " + data.arrivalTime),
            price: data.price
        };

        var startTime = moment(this.flightDetails.startTime, 'YYYY-MM-DD hh:mm A');
        console.log(startTime);
        var endTime = moment(this.flightDetails.endTime, 'YYYY-MM-DD hh:mm A');
        console.log(endTime);
        var ms = endTime.diff(startTime);
        console.log(ms);
       // console.log("dur"+moment.duration(86400000));
        //console.log("hours"+moment.duration(86400000).hours());
        // var ms = flightDetails.endTime.diff(flightDetails.startTime);
        var duration = moment.duration(ms).hours() + " hr " + moment.duration(ms).minutes() + " min";
        console.log(duration);
        this.state.flightData=this.flightDetails;
        this.state.duration=duration;
    }
    IncrementItem() {

        this.setState({ clicks: this.state.clicks + 1 });
    }
    DecreaseItem = () => {
        this.setState({ clicks: this.state.clicks - 1 });
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
    }
    onPaymentClick=(event)=>{
        // event.preventDefault(); 
      //   window.location.href="/Payment";
      this.setState({redirect: true});

     return <Redirect to="/Payment"></Redirect>;
      
    }

    render() {
        return (

            <Container fluid="sm">
                <h2 style={{backgroundColor:'#b5d2fd',paddingBottom:"30px", paddingLeft:"50px", paddingTop: "30px",color:"#0d6efd"}}>Book Flight</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        {/* <Accordion.Header>{flightDetails.deptLoc+" " + moment(flightDetails.depDate).format('DD MMM, YYYY')+" "+flightDetails.deptTime}</Accordion.Header> */}
                        <Accordion.Header>
                            <Container>
                                <Row xs={4} md={5} xl={5}>
                                    <Col>{moment(this.flightDetails.depDate).format('DD MMM, YYYY')}</Col>
                                    <Col>{this.flightDetails.deptTime+" - "+ this.flightDetails.arrTime}</Col>
                                    <Col>{this.state.duration}</Col>
                                    <Col>Nonstop</Col>
                                    <Col>${this.flightDetails.price}</Col>
                                </Row>
                            </Container>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row xl={3}>
                                <Col>
                                    <Row>
                                        <Col xs="auto">{this.flightDetails.deptTime}</Col>
                                        <Col>{this.flightDetails.deptLoc}</Col>

                                    </Row>
                                    <div class="xvIywb y52p7d"><div class="T6Yut"></div><div class="Vd4i6d"></div><div class="T6Yut"></div></div>
                                    <Row>
                                        <Col xs="auto">{this.flightDetails.arrTime}</Col>
                                        <Col>{this.flightDetails.arrLoc}</Col>
                                    </Row>
                                </Col>
                                <Col>   <div class="CQYfx y52p7d">Travel time: {this.state.duration}</div></Col>
                                <Col>
                                    <div class="L5Okte y52p7d" jsname="vg2oCf">
                                        <ul class="elO9Ce sSHqwe JNp8ff">
                                            <li class="WtSsrd">
                                                <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" class="qqxCKc NMm5M"><path d="M5 12V3H3v9c0 2.76 2.24 5 5 5h6v-2H8c-1.66 0-3-1.34-3-3zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v7h4.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z"></path></svg>
                                                <span>Average legroom (31 in)</span>
                                            </li>
                                            <li class="WtSsrd">
                                                <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" class="qqxCKc NMm5M"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"></path></svg>
                                                <span>Wi-Fi</span></li>
                                            <li class="WtSsrd">
                                                <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" class="qqxCKc NMm5M"><path d="M16.01 7L16 3h-2v4h-4V3H8v4h-.01C7 6.99 6 7.99 6 8.99v5.49L9.5 18v3h5v-3l3.5-3.51v-5.5c0-1-1-2-1.99-1.99z"></path></svg>
                                                <span>In-seat power &amp; USB outlets</span></li>


                                            <li class="WtSsrd">
                                                <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" class="qqxCKc NMm5M"><path d="M2 16v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0 4v3h3c0-1.66-1.34-3-3-3zm0-8v2c4.97 0 9 4.03 9 9h2c0-6.08-4.92-11-11-11zM17 1.01L7 1c-1.1 0-2 .9-2 2v7.37c.69.16 1.36.37 2 .64V5h10v13h-3.03c.52 1.25.84 2.59.95 4H17c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99z"></path></svg>
                                                <span>Stream media to your device</span></li>


                                        </ul></div>
                                </Col>
                            </Row>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        {/* <Accordion.Header>{flightDetails.deptLoc+" " + moment(flightDetails.depDate).format('DD MMM, YYYY')+" "+flightDetails.deptTime}</Accordion.Header> */}
                        <Accordion.Header>
                            <Container>
                                <Row xs={1} md={2} xl={4}>
                                    Add Travellers
                                </Row>

                            </Container>
                        </Accordion.Header>
                        <Accordion.Body>
                            <Row>
                                <Col xs="auto"><span>Number Of Passengers:</span></Col>
                                <Col xs="auto">   <button onClick={this.DecreaseItem}>-</button></Col>
                                <Col xs="auto"> <span>{this.state.show ? <h3 class="passenger-count">{this.state.clicks}</h3> : ''}</span></Col>
                                <Col xs="auto">
                                    <button onClick={this.IncrementItem}>+</button></Col>
                                {/* button onClick={this.ToggleClick}> */}
                                {/* {this.state.show ? 'Hide number' : 'Show number'} */}
                                {/* </button> */}
                            </Row>
                            <Row>

                                <form onSubmit={this.onPaymentClick} method="post" role="form" class="php-user-form">
                                    {
                                        [
                                            ...Array(this.state.clicks),].map((data, i) =>

                                                <Container>
                                                    <h4>passenger {i + 1}</h4>
                                                    <div class="row row-padding">
                                                        <div class="col-md-3 form-group divPAdding">
                                                            <input type="text" name="firstname" class="form-control  input-lg" id="fname" placeholder="First Name" required />
                                                        </div>
                                                        <div class="col-md-3 form-group divPAdding">
                                                            <input type="text" name="lastname" class="form-control  input-lg" id="lname" placeholder="Last Name" required />
                                                        </div>

                                                    </div>

                                                    <div class="row row-padding">
                                                        <div class="col-md-6 form-group divPAdding">
                                                            <input type="email" class="form-control  input-lg" name="email2" id="email1" placeholder="Your Email" required />
                                                        </div>
                                                    </div>
                                                    <div class="row row-padding">
                                                        <div class="col-md-6 form-group divPAdding">
                                                            <input type="text" class="form-control" id="cell" name="cell" placeholder="Cell Phone" required />
                                                        </div>
                                                    </div>
                                                    <div class="row row-padding">
                                                        <div class="col-md-6 form-group divPAdding">
                                                            <select class="form-control" >
                                                                <option>Select Gender</option>
                                                                <option>Male</option>
                                                                <option>Female</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="row row-padding">
                                                        <div class="col-md-6 form-group divPAdding">
                                                            <select class="form-control" >
                                                                <option>Select Seat Number</option>
                                                                <option>1A</option>
                                                                <option>1B</option>
                                                                <option>1C</option>
                                                                <option>1D</option>
                                                                <option>2A</option>
                                                                <option>2B</option>
                                                                <option>2C</option>
                                                                <option>2D</option>
                                                                <option>3A</option>
                                                                <option>3B</option>
                                                                <option>3C</option>
                                                                <option>3D</option>
                                                                <option>4A</option>
                                                                <option>4B</option>
                                                                <option>4C</option>
                                                                <option>4D</option>
                                                                <option>5A</option>
                                                                <option>5B</option>
                                                                <option>5C</option>
                                                                <option>5D</option>
                                                                <option>5A</option>
                                                                <option>5B</option>
                                                                <option>5C</option>
                                                                <option>5D</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    

                                                </Container>
                                            )}
                                            <Container>

                                    {this.state.clicks > 0 &&
                                        <div class="row row-padding">
                                            
                                            <div class="col-md-6 form-group divPAdding">
                                            <input type="text" class="form-control" id="cell" name="cell" placeholder="Total Price" value={"$"+this.flightDetails.price*this.state.clicks}></input>
                                            </div>
                                            <div class="col-md-6 form-group divPAdding">
                                            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                            <label class="form-check-label" htmlFor="exampleCheck1"> Use Reward Points?(You have x reward points)</label>
                                            </div>      
                                            <div class="form-group">
                                                {/* <button type="submit">Payment</button> */}
                                                {/* <Link to="/Payment" params={{ testvalue: "hello" }} className="pure-menu-link">Payment</Link> */}
                                                <div>
                                                <Link className="rounded" style={{fontFamily: "var(--bs-body-font-family)",fontSize:" var(--bs-body-font-size)",fontWeight: "var(--bs-body-font-weight)",lineHeight: "var(--bs-body-line-height)", textDecoration: "none",paddingLeft: "1rem",paddingRight:"1rem",paddingTop:"0.2rem",paddingBottom:"0.56rem", backgroundColor: "#0d6efd", color: 'white'}} to={{pathname: '/Payment',state: { flightData: this.state }}}>Payment</Link>
                                                </div>
                                            </div>
                                        </div>
                                      
                                    }
                                      </Container>
                                </form>
                            </Row>

                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                
            </Container>
        );
    }
    // }
}


//render(<Example />);
//export default { FormPage };

