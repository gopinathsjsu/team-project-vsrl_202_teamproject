import React, { useEffect, useState, Fragment } from 'react';
import Header from './Header'
import "../css/Home.css"
import MyNavbar from '../components/NavBar';
const Home = ()=>{
    return(

        <div className="home" style={{backgroundColor:'white'}}>
            {/* <AppBar/> */}

            <MyNavbar />
            <Header/>
            
        </div>

    //     <div className="home" >
    //     <h2 style={{backgroundColor:'#b5d2fd',paddingBottom:"30px",marginBottom:"0.12rem", paddingLeft:"50px", paddingTop: "30px",color:"#0d6efd"}}>Airline Application</h2>
    //       {/* <AppBar/> */}
    //       {/* <h1 style={{backgroundColor:'#c8dadb', padding:'10 100 10 10'}}>Airline Application</h1> */}
          
    //       <Header/>
    //   </div>


    )
}

export default Home;