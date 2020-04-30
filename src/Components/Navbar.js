import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div id="header" style={{height:'-5px'}}className="App" sticky="top">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl"  variant="dark" fixed="top" position="relative" style={{  'fontWeight': 'bold','font-family': 'auto', backgroundImage: 'linear-gradient(180deg, #FFC107, #e2b93e)'}}>
  <ReactBootStrap.Navbar.Brand href="#home">World Corona Graph</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle style={{border:'1px solid white'}} aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    
    <Link to="/mygraphcomponent">
    <ReactBootStrap.Nav.Link href="#mygraphcomponent">World Graph</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/worlddata">
    <ReactBootStrap.Nav.Link href="#worlddata">World Cases</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/statewisedata">
    <ReactBootStrap.Nav.Link href="#statewisedata">State wise</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/districtwisedata">
    <ReactBootStrap.Nav.Link href="#districtwisedata">District wise</ReactBootStrap.Nav.Link>
    </Link>
      {/* <ReactBootStrap.NavDropdown title="YEET" id="collasible-nav-dropdown">
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Divider />
        <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown> */}
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
    {/* <Link to="/deets">
    <ReactBootStrap.Nav.Link href="#deets">More deets</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/dankmemes">
    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Dank memes
      </ReactBootStrap.Nav.Link>
    </Link> */}
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;