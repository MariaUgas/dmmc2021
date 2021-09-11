import React from "react";
//import store from "../../firebase/firebase.js";
import { Accordion } from "react-bootstrap";
import Editor from "../EdicionCatalogo/Editor.jsx";

export const MapeoCatalogo = ({ mapaAreasObj }) => {
  return (
    <div className="contenedor-cursos" id="cursos-id">
      <h3 className="titulo">Edicion de Cursos:</h3>
      <Accordion flush>
        {mapaAreasObj &&
          mapaAreasObj.map((a, i) => {
            return (
              <Accordion.Item eventKey={i}>
                <Accordion.Header>{a.nombre}</Accordion.Header>
                <Accordion.Body >
                  <Editor idarea={a.codigo} />
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
      </Accordion>
    </div>
  );
};

export default MapeoCatalogo 