import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom'

const NavbarComponent=({userLogin,user})=> {
  const kk=user.find((e)=>e.id===userLogin.id)
  const siva=kk.cartitem
  const sivaa=kk.name
  return (
    <>
    <Navbar expand="lg" className="bg-warning sticky-top">
    <Container fluid>
      <Navbar.Brand to="/products" as={Link} className='text-BLACK'>❚█══MAHA CART══█❚</Navbar.Brand>
      <Nav>
        <Nav.Link to="/products" as={Link} className='text-black'>PRODUCTS</Nav.Link>
      </Nav>
      <Navbar.Toggle />
      <Navbar.Collapse className='justify-content-end me-5'>
      <Navbar.Text>
          <Nav.Link to="/user/login" className='text-black' as={Link}>{sivaa}</Nav.Link>
        </Navbar.Text>
      <Navbar.Text>
          <Nav.Link to="" className='text-black ' as={Link}>LOG OUT</Nav.Link>
        </Navbar.Text>
        <Navbar.Text>
          <Nav.Link to="/cart" className='text-black shop' as={Link}>🛒 {siva.length}</Nav.Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <main>
    <Outlet/>
  </main>
  </>
  );
}

export default NavbarComponent;
