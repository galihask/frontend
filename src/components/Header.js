import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'


function Header() {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
        <Navbar.Brand>Proshope</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
          {/* <Nav.Link href='/cart'><i className="fas fa-shopping-cart"></i>Cart</Nav.Link> */}
          {/* <Nav.Link href='/login'><i className="fas fa-user"></i>Login</Nav.Link> */}
          <NavLink to={'/cart'}>Cart</NavLink>
        </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        
    </header>
  )
}

export default Header