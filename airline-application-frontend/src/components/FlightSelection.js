import React,{ useState }  from 'react'
import DataTable, { caseInsensitiveSort } from 'react-data-table-component';
import { Button, FormControl, InputGroup, Form } from "react-bootstrap";
import { Redirect } from 'react-router';
function FlightSelection(props) {
  const [flightSelectedStatus, setflightSelectedStatus] = useState(false);
  const [flightData, setFlightData] = useState("");
  const ActionComponent = ({ row, onClick }) => {
    const clickHandler = () => onClick(row);

    return <Button onClick={clickHandler}>select</Button>;
  };
  const selectFlight = (row) => {   
    setflightSelectedStatus(true);  
    console.log(row); 
    setFlightData(row);   
  };
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
      name: 'Arrival Location',
      selector: 'arrivalLocation'
    },
    {
      name: 'Price',
      selector: 'price',
      sortable: true,
      sortFunction: caseInsensitiveSort
    },
    {
      cell: row => <ActionComponent row={row} onClick={selectFlight}>Select</ActionComponent>,
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
  return <DataTable title="Flight List" columns={columns} data={props.data} pagination />;
}

export default FlightSelection
