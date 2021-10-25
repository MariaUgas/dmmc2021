import React from "react";
//import store from "../../firebase/firebase.js";
import { Accordion } from "react-bootstrap";
import TablaCursos from "../TablaCursos/TablaCursos.jsx";

export const ItemAcordeonArea = ({ mapaAreasObj }) => {
  return (
    <div className="contenedor-cursos" id="cursos-id">
      <h3 className="titulo">TE OFRECEMOS:</h3>
      <Accordion flush style={{marginLeft:"20px"}}>
        {mapaAreasObj &&
          mapaAreasObj.map((a, i) => {
            return (
              <Accordion.Item eventKey={i}>
                <Accordion.Header>{a.nombre}</Accordion.Header>
                <Accordion.Body >
                  <TablaCursos idarea={a.codigo} />
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
    </div>
  );
};

export default ItemAcordeonArea;
