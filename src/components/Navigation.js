import {Container, Nav, Navbar, NavLink} from "react-bootstrap";

const Navigation = () =>{
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">paterneN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {/*<Nav.Link href="#home">Home</Nav.Link>*/}


                    </Nav>
                    <Navbar.Text>
                        <NavLink>Login</NavLink>
                    </Navbar.Text>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}
export default Navigation;