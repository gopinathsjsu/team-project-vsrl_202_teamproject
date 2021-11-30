import React,{ useState }  from 'react'
import DataTable, { caseInsensitiveSort } from 'react-data-table-component';
import { Button, FormControl, InputGroup, Form } from "react-bootstrap";
import { Redirect } from 'react-router';
import { cancelFlight } from './apicalls/FlightApiCalls';
import { ToastContainer,toast } from "react-toastify";
function FlightSelection(props) {
  const [flightSelectedStatus, setflightSelectedStatus] = useState(false);
  const [flightData, setFlightData] = useState("");
  const ActionComponent = ({ row, onClick, value }) => {
    const clickHandler = () => onClick(row);

    return <Button style={{backgroundColor:"#024"}} onClick={clickHandler}>{value}</Button>;
  };
  const selectFlight = (row) => {   
    setflightSelectedStatus(true);  
    console.log(row); 
    setFlightData(row);   
  };

  const flightCancel = () =>{
    cancelFlight(props.flightNumber)
    .then(()=>console.log("Flight Deletion Successfull"))
    .catch((err)=>console.log("Flight Deletion Failed "+err))
  }

  const columns = [
    {
      name: 'Arrival Location',
      selector: 'arrivalLocation'
    },
    {
      name: 'Departure Location',
      selector: 'departureLocation'
    },
    {
      name: 'Departure Date',
      selector: 'departureDate'
    },
    {
      name: 'Arrival Date',
      selector: 'arrivalDate'
    },
    {
      name: 'Price',
      selector: 'price',
      sortable: true,
      sortFunction: caseInsensitiveSort
    },
    {
      cell: row => <ActionComponent row={row} onClick={selectFlight} value="Select">Select</ActionComponent>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      omit:!props.showSelect
    }
  ];
  

  const columnsWithCancel = [
    {
      name: 'Arrival Location',
      selector: 'arrivalLocation'
    },
    {
      name: 'Departure Location',
      selector: 'departureLocation'
    },
    {
      name: 'Departure Date',
      selector: 'departureDate'
    },
    {
      name: 'Arrival Date',
      selector: 'arrivalDate'
    },
    {
      name: 'Price',
      selector: 'price',
      sortable: true,
      sortFunction: caseInsensitiveSort
    },
    {
      cell: row => <ActionComponent row={row} onClick={flightCancel} value="Cancel Flight">Cancel Flight</ActionComponent>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
      
    }
  ];
  
  if (flightSelectedStatus) {
    return <Redirect  to={{
      pathname: "/FlightBooking",
      state: { flightData: flightData }}}></Redirect>;
  }
  if(props.showCancel)
    return <DataTable title="Flight List" columns={columnsWithCancel} data={props.data} pagination />;
  else
    return <DataTable title="Flight List" columns={columns} data={props.data} pagination />;
}

export default FlightSelection
