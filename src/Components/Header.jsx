import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='p1'>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Women" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">  <Link to='/Viewallsarees'>Sarees</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action4"><Link to='/Viewallkurtis'>Kurtis</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action5"><Link to='/Viewallwatches'>Watches</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action6"><Link to='/Viewallfashion'>
               Fashion</Link>
              </NavDropdown.Item>
           
            
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
