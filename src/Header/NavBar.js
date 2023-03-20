import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
  console.log('NavBar');
  return (
    <Navbar bg="light" expand="lg" className="mb-2">
      <Container>
        <Navbar.Brand href="/elektrikell-app">Elektrikell</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/elektrikell-app/about" className="nav-link">Minust</Link>
            <Link to="/elektrikell-app/high" className="nav-link">Tipptund</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
