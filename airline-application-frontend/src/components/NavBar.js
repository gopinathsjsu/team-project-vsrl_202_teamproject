import React from 'react';
import { NavItem,Navbar,Header,Nav,Container,Button } from 'react-bootstrap';
import { signout,isAuthenticated } from '../authHelper';
import { useHistory } from 'react-router';
import { Fragment } from 'react';

function MyNavbar (){
        const history= useHistory();
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="http://localhost:3009/">Travel Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             
              <Nav>
                 { (!isAuthenticated() && (
                    <Fragment>
                <Nav.Link href="http://localhost:3009/login">Login</Nav.Link>
                <Nav.Link eventKey={2} href="http://localhost:3009/signup">
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
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }

  
export default MyNavbar;