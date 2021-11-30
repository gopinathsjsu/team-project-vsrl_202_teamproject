import React,{useState} from 'react'
import Base from "../core/Base";
import {isAuthenticated} from "../authHelper/index"
import {Link} from 'react-router-dom'
import {createFlight} from './adminapicall';

const AddFlight =()=>{
    const [flightNumber,setFlightNumber] = useState("")
    const [arrivalLocation,setArrivalLocation] = useState("")
    const [arrivalTime,setArrivalTime] = useState("")
    const [departureTime,setdepartureTime] = useState("")
    const [departureLocation,setDepartureLocation] = useState("")
    const [departureDate,setDepartureDate] = useState("")
    const [arrivalDate,setArrivalDate] = useState("")
    const [error,setError] = useState(false)
    const [success,setSuccess] = useState(false)
    const [price,setPrice] = useState(0)

    const {user,token} = isAuthenticated()

    const goBack = ()=>(
        <div className="mt-5">
            {/* <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">Admin Home</Link> */}
        </div>
    )

    const onSubmit =event=>{
        event.preventDefault();
        setError("");
        setSuccess(false)
        const values = {flightNumber,arrivalLocation,departureLocation,arrivalTime,departureTime,departureDate,arrivalDate,price,error};
        //backend request fired
        createFlight(values)
            .then(data=>{
                if(data.error){
                    setError(true)
                }
                else{
                    setError("")
                    setSuccess(true)
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
                <p className="form-label">Enter Flight Number</p>
                <input type="text" onChange={event=>setFlightNumber(event.target.value)} value={flightNumber} className="form-control my-3" autofocus required ></input>
                <p className="form-label">Enter Departure Location</p>
                <input type="text" onChange={event=>setDepartureLocation(event.target.value)} value={departureLocation} className="form-control my-3" autofocus required></input>
                <p className="form-label">Enter Arrival Location</p>
                <input type="text" onChange={event=>setArrivalLocation(event.target.value)} value={arrivalLocation} className="form-control my-3" autofocus required ></input>
                <p className="form-label">Select Departure Time</p>
                <input type="text" onChange={event=>setdepartureTime(event.target.value)} value={departureTime} className="form-control my-3" autofocus required ></input>
                <p className="form-label">Enter Arrival Time</p>
                <input type="text" onChange={event=>setArrivalTime(event.target.value)} value={arrivalTime} className="form-control my-3" autofocus required ></input>
                <p className="form-label">Enter Departure Date</p>
                <input type="date" onChange={event=>setDepartureDate(event.target.value)} value={departureDate} className="form-control my-3" autofocus required ></input>
                <p className="form-label">Select Arrival Date</p>
                <input type="date" onChange={event=>setArrivalDate(event.target.value)} value={arrivalDate} className="form-control my-3" autofocus required ></input> 
                <p className="form-label">Enter Price</p>
                <input type="text" onChange={event=>setPrice(event.target.value)} value={price} className="form-control my-3" autofocus required ></input>
                <button style={{backgroundColor:"#024",color:"white"}} onClick={onSubmit} className="btn btn-outline-info">Create Flight</button>
            </div>
        </form>
    )
    return (
        <Base title=" " description=" " className="container p-4">
             <p className="login-text">Create Flight</p>
            <div className="row">
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