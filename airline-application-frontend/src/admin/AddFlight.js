import React,{useState} from 'react'
import Base from "../core/Base";
import {isAuthenticated} from "../authHelper/index"
import {Link} from 'react-router-dom'
import {createFlight} from './adminapicall'

const AddFlight =()=>{
    const [name,setName] = useState("")
    const [arrivalLocation,setArrivalLocation] = useState("")
    const [departureLocation,setDepartureLocation] = useState("")
    const [departureDate,setDepartureDate] = useState("")
    const [arrivalDate,setArrivalDate] = useState("")
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)

    const {user,token} = isAuthenticated()

    const goBack = ()=>(
        <div className="mt-5">
            <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Admin Home</Link>
        </div>
    )

    const onSubmit =event=>{
        event.preventDefault();
        setError("");
        setSuccess(false)
        const values = {name,arrivalLocation,departureLocation,departureDate,arrivalDate,error};
        //backend request fired
        createFlight(values)
            .then(data=>{
                if(data.error){
                    setError(true)
                }
                else{
                    setError("")
                    setSuccess(true)
                    setName("")
                }
            })
    }

    const successMessage = ()=>{
        if(success){
            return <h4 className="text-success">Flight created successfully</h4>
        }
    }

    const warningMessage = ()=>{
        if(error){
            return <h4 className="text-warning">Failed to create Flight</h4>
        }
    }

    const myFlightForm =()=>(
        <form>
            <div className="form-group">
                <p className="lead">Enter Flight Number</p>
                <input type="text" onChange={event=>setName(event.target.value)} value={name} className="form-control my-3" autofocus required placeholder="For Ex.Summer"></input>
                <p className="lead">Enter Departure Location</p>
                <input type="text" onChange={event=>setDepartureLocation(event.target.value)} value={departureLocation} className="form-control my-3" autofocus required placeholder="For Ex.Summer"></input>
                <p className="lead">Enter Arrival Location</p>
                <input type="text" onChange={event=>setArrivalLocation(event.target.value)} value={arrivalLocation} className="form-control my-3" autofocus required placeholder="For Ex.Summer"></input>
                <p className="lead">Select Departure Date</p>
                <input type="date" onChange={event=>setDepartureDate(event.target.value)} value={departureDate} className="form-control my-3" autofocus required placeholder="For Ex.Summer"></input>
                <p className="lead">Select Arrival Date</p>
                <input type="date" onChange={event=>setArrivalDate(event.target.value)} value={arrivalDate} className="form-control my-3" autofocus required placeholder="For Ex.Summer"></input> 
                <button onClick={onSubmit} className="btn btn-outline-info">Create Flight</button>
            </div>
        </form>
    )
    return (
        <Base title="Create a flight here" description="Add a new flight" className="container bg-info p-4">
            <div className="row bg-white rounded">
                <div className="col md-8 offset md-2">
                    {successMessage()}
                    {warningMessage()}
                    {myFlightForm()}
                    {goBack()}
                </div>
            </div>
        </Base>
    )
}

export default AddFlight;