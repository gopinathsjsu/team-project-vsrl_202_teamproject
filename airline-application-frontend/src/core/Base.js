import React from "react";
import Menu from "./Menu";
import "../css/AdminDashboard.css"

const Base= ({
    title= "My Title",
    description= "My description",
    className="bg-dark text-white p-4",
    children
})=> {
    return(
        <div>
        <Menu />
           <div className="container-fluid adminCard">
                <div className="jumbotron adminCard  text-white text-center">
                    <h2 className="display-4">{title}</h2>
                    <p className="lead">{description}</p>
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