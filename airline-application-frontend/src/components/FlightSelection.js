import React from 'react'
import DataTable,{caseInsensitiveSort} from 'react-data-table-component';
function FlightSelection(props) {
    
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
      }
  ];

  return <DataTable title="Flight List" columns={columns} data={props.data} pagination />;
}

export default FlightSelection
