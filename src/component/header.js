import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../mrsushi_logo.png'


const Header = () => {
    return(
        <>  
        <Container className='fluid'>
            <Navbar collapseOnSelect expand='lg' bg="dark" variant="dark" className='mt-3'>
                <Navbar.Brand className='ml-5'>
                    <img
                        src={logo}
                        alt='Mr Sushi Logo'
                        width='35'
                        height='35'/>
                    Mr. Sushi
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbar-nav-menu'/>
                <Navbar.Collapse id='navbar-nav-menu' className='justify-content-end mr-5'>
                    <Nav>
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/menu'>Menu</Nav.Link>
                        <Nav.Link href='/booking'>Booking</Nav.Link>
                        <Nav.Link href="/login" variant='dark'>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        </>
    )
}

export default Header;