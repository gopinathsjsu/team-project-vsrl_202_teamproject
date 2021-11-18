import React, { useEffect, useState, Fragment } from 'react';
import Header from './Header'
import "../css/Home.css"
import MyNavbar from '../components/NavBar';
const Home = ()=>{
    return(
        <div className="home">
            {/* <AppBar/> */}

            <MyNavbar />
            <Header/>
            
        </div>
    )
}

export default Home;