import React from 'react'
import Base from '../core/Base'
import {isAuthenticated} from '../authHelper/index'
import {Link} from "react-router-dom"
import "../css/AdminDashboard.css"
const AdminDashBoard = ()=>{

    // const {user: {name,email,role}} = isAuthenticated()

    const adminLeftSide = ()=>{
        return (
            <div className="adminCard">
                <h4 style={{backgroundColor:"#024"}} className="card-header text-white">Admin Navigation</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/admin/create/flights" className="nav-link text-primary">Create Flights</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/admin/cancel/flights" className="nav-link text-primary">Cancel Flight</Link>
                </li>

                 {/* <li className="list-group-item">
                    <Link to="/admin/manage" className="nav-link text-success">Manage Flights</Link>
                </li> */}
            </ul>
            </div>
        )
    }

    const adminRightSide = ()=>{
        return (
            <div className="adminCard mb-4">
                <h4 className="card-header">Admin Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                    <span className="badge badge-success mr-2">Name:</span>
                    {/* {name} */}
                    </li>

                    <li className="list-group-item">
                    <span className="badge badge-success mr-2">Email:</span>
                    {/* {email} */}
                    </li>

                    <li className="list-group-item">
                    <span className="badge badge-danger mr-2">Admin Area:</span>
                    </li>
                </ul>
            </div>
        )
    }

    return (
        <Base className="admin-card" title="Welcome to Admin area" description="Manage all of your Flights here" className="container adminCard p-4">
            <div className="row">
                <div className="col-3">{adminLeftSide()}</div>
                <div className="col-9">{adminRightSide()}</div>
            </div>

        </Base>
    )
}

export default AdminDashBoard;