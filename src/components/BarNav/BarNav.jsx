import React from "react";
import aulaVirtual from "../../img/aula-virtual.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const BarNav = () => {
  return (
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
                    ><a href="https://aula.institutolap.com/" target="_blank"><img src={aulaVirtual} alt="aulaVirtual" width="80px"/></a></OverlayTrigger>
        </li>
      </ul>
    </div>
  );
};

export default BarNav;
