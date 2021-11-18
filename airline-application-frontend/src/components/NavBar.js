import React from 'react';
import { NavItem,Navbar,Header,Nav,Container } from 'react-bootstrap';

class MyNavbar extends React.Component{
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#">Travel Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             
              <Nav>
                <Nav.Link href="http://localhost:3009/login">Login</Nav.Link>
                <Nav.Link eventKey={2} href="http://localhost:3009/signup">
                  SignUp
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}
  
export default MyNavbar;