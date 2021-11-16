import React, { useEffect, useState, Fragment } from 'react';
import Header from './Header'
import "../css/Home.css"
const Home = ()=>{
    return(
        <div className="home">
            {/* <AppBar/> */}
            <h1 style={{backgroundColor:'#5c0931'}}>Airline Application</h1>
            <Header/>
            
        </div>
    )
}

export default Home;