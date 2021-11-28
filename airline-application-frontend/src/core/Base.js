import React from "react";
import Menu from "./Menu";
import "../css/AdminDashboard.css"
import NavBar from "../components/NavBar"
const Base= ({
    title= "My Title",
    description= "My description",
    className="bg-dark text-white p-4",
    children
})=> {
    return(
        <div>
            <NavBar/>
           <div className="container-fluid adminCard">
                <div className="jumbotron adminCard  text-white text-center">
                </div>
                <div className={className}>{children}</div>
           </div>
           {/* <footer className="footer  adminCard mt-auto py-3">
                <div className="container-fluid adminCard text-white text-center py-3">
                    <h4>If you got any questions, feel free to reach out!</h4>
                    <button className="btn btn-warning btn-lg">contact us</button>
                </div>
                <div className="container">
                 
                </div>
           </footer>  */}
        </div>
    )
}

export default Base;