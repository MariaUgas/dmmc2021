import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'


export const NavBarResp = () => {
    return (
        <div className="barNavResp">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{textAlign:"center"}} >
                        <Nav.Link href="#cursos-id">Cursos</Nav.Link>
                        <Nav.Link href="#noticia-id">Noticia</Nav.Link>
                        <Nav.Link href="#contacto-id">Contacto</Nav.Link>
                        <Nav.Link href="#inscribete-id">Notificación de Pago</Nav.Link>
                        <Nav.Link href="https://aula.institutolap.com/" target="_blank">Aula virtual</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}
