import React from 'react';
import { NavItem,Navbar,Header,Nav,Container,Button } from 'react-bootstrap';
import { signout,isAuthenticated } from '../authHelper';
import { useHistory } from 'react-router';
import { Fragment } from 'react';
import "../css/Base.css";

function MyNavbar (){
        const history= useHistory();
        return (
            <Navbar className="navbar-background-color" collapseOnSelect expand="lg" variant="dark">
            <Container>
            <Navbar.Brand className="navbar-font" href="http://localhost:3000/">Airline Application</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             
              {/* <Nav className="ms-auto">
                 { (!isAuthenticated() && (
                    <Fragment className="mr-auto">
                <Nav.Link  href="http://localhost:3006/login">Login</Nav.Link>
                <Nav.Link eventKey={2} href="http://localhost:3006/signup">
                  SignUp
                </Nav.Link>
                </Fragment>
                  )) }

               {isAuthenticated() && <Button  onClick={()=>{
                   signout(()=>{
                       history.push("/")
                   });
               }}>
                  Logout
                </Button> } 
              </Nav> */}
              <Nav className="ms-auto">
              {isAuthenticated() && <Button style={{color:"white", borderColor:"#024", backgroundColor:"#024"}} onClick={()=>{
                   signout(()=>{
                       history.push("/")
                   });
               }}>
                  Logout
                </Button>}
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }

  
export default MyNavbar;