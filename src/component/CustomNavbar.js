import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function CustomNavbar() {

  let navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('token');
    navigate('/login')
    // showAlert("Logged out successfully", "success")
  }
  let location = useLocation();
  return (
    <div>
      <Navbar className="navbar-dark bg-dark" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="/">iNotebook</Navbar.Brand>       
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
             >
              <Nav.Link className={`${location.pathname ==="/"? "active":"" }`} href="/">Home</Nav.Link>
              <Nav.Link className={`${location.pathname ==="/about"? "active":"" }`} href="/about">About</Nav.Link>
            </Nav>
            {!localStorage.getItem('token')?<Form className="d-flex">

              <Button href = "/login" className = "mx-1" variant="outline-light">Login</Button>
              <Button  href = "/signup" variant="outline-light">Signup</Button>
            </Form>:<Button onClick= {handleLogout}  variant= "outline-light">Logout</Button>}
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;
