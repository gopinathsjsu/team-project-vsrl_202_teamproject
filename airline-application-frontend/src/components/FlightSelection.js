    import React from 'react'
    import {useState} from 'react'
    import  {Component} from 'react';
    import DataTable,{caseInsensitiveSort} from 'react-data-table-component';
    import Book_flight1 from "./Book_flight1";
    import { Button, FormControl, InputGroup, Form } from "react-bootstrap";
    import { BrowserRouter,Redirect, Route } from 'react-router-dom';
    export default class FlightSelection extends Component {
          
    constructor(props) {
      super(props);
      this.state= {
        redirect: false,
        showModal: false,
        rowdata: {}
      }
      this.handleSubmit= this.handleSubmit.bind(this);
      this.data= props.data;
    }
    render(){
        
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
            name: "Book",
            //cell: () => <Button raised primary onClick={this.handleSubmit}>Book</Button>,
            cell: row => <ActionComponent row={row} onClick={this.handleSubmit}Book/>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            
          }
      ];
      const RowData=(row, event)=>{console.log(row);};
      const ActionComponent = ({  row, onClick  }) => {
        const clickHandler = () => onClick(row);   
      
       return <Button onClick={clickHandler}>Action</Button>;
      };
      return (<div><DataTable onRowClicked={RowData} title="Flight List" columns={columns} data={this.data} pagination /> {this.showBook_Flight1()}</div>);
      
    }
    handleSubmit = row => {
      this.setState({
        showModal: !this.state.showModal, 
        redirect: true,
        rowdata: row
      })
      //event.preventDefault();
      console.log(row);
    }
    showBook_Flight1(){
      if(this.state.showModal){
        return <Redirect to= '/Book_flight1'/>;
      }
    }   
  }
    //export default FlightSelection;
