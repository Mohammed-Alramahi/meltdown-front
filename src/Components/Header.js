import React, { Component } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
 class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Library</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/favorite">Favorite</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </div>
        )
    }
}

export default Header
