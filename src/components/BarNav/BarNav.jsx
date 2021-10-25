import React from "react";
import aulaVirtual from "../../img/aula-virtual.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Navbar, Nav, Container } from 'react-bootstrap'


const BarNav = () => {

 


  return (
    <div>

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
    <div class="container-nav">
      <ul>
        <li>
          <a href="#cursos-id">Cursos</a>
        </li>
        <li>
          <a href="#noticia-id">Noticia</a>
        </li>
        <li>
          <a href="#contacto-id">Contacto</a>
        </li>
        <li>
          <a href="#inscribete-id">Notificación de pago</a>
        </li>
        <li>
        <OverlayTrigger
                      overlay={
                        <Tooltip >
                          Aula Virtual
                        </Tooltip>
                      }
                      placement="bottom"
                    ><a href="https://aula.institutolap.com/" target="_blank" rel="noreferrer"><img src={aulaVirtual} alt="aulaVirtual" width="70px"/></a></OverlayTrigger>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default BarNav;
