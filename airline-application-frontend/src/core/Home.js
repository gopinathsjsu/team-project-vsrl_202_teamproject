import React, { useEffect, useState, Fragment } from 'react';
import Header from './Header'
import "../css/Home.css"
import MyNavbar from '../components/NavBar';
import flights from '../images/flights.jpeg';
import { Container } from "react-bootstrap";
const Home = ()=>{
    return(
        <Container fluid className="home" style={{paddingLeft:0,paddingRight:0,paddingBottom:0,marginRight:0,marginLeft:0}}>

         {/* <div className="home" style={{backgroundImage: 'url('+flights+')'}}> */}
            {/* <AppBar/> */}

            <MyNavbar />
            <Header/>
        </Container>
        // </div>

    //     <div className="home" >
    //     <h2 style={{backgroundColor:'#b5d2fd',paddingBottom:"30px",marginBottom:"0.12rem", paddingLeft:"50px", paddingTop: "30px",color:"#0d6efd"}}>Airline Application</h2>
    //       {/* <AppBar/> */}
    //       {/* <h1 style={{backgroundColor:'#c8dadb', padding:'10 100 10 10'}}>Airline Application</h1> */}
          
    //       <Header/>
    //   </div>


    )
}

export default Home;