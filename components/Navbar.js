// import individual react-bootstrap components
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Brand from '../public/logo.svg';
import SocialMail from './SocialMail'

export default function navbar() {
    // functions

    // returned component
    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <Brand /> Filbert Shi
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <NavDropdown title="Demos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <SocialMail/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
