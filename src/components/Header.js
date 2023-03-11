import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
import CART_LOGO from '../images/pngegg.png';



function Header(props) {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand>Proshope</Navbar.Brand>
                    <Navbar.Brand>{props.isLogged ? 'LOGGED' : 'NOT LOGGED'}</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='mr-auto'>
                            {/* <Nav.Link href='/cart'><i className="fas fa-shopping-cart"></i>Cart</Nav.Link> */}
                            {/* <Nav.Link href='/login'><i className="fas fa-user"></i>Login</Nav.Link> */}
                            {props.isLogged ?
                                <NavLink to={'/cart'}>
                                    <div style={{display:'flex', flexDirection:'row'}}>
                                        <div style={{fontSize:'20px', color:'white'}}>cart</div>
                                        <img src={CART_LOGO} width={'30px'}/>
                                    </div>
                            </NavLink> : null}
                            {!props.isLogged ? <NavLink to={'/signup'}>Sign up</NavLink> : null}
                            {!props.isLogged ? <NavLink to={'/login'}>Login</NavLink> : null}
                            {<NavLink to={'/products'}>
                                <div style={{fontSize:'20px', color:'white'}}>products</div>
                            </NavLink>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header