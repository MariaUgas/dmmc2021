import React, { useState, useEffect } from "react";
import store from "../../firebase/firebase.js";
import { Accordion } from "react-bootstrap";
import TablaCursos from "../TablaCursos/TablaCursos.jsx";

export const ItemAcordeonArea = () => {
  const [areasObj, setAreasObj] = useState([]);

  useEffect(() => {
    store.collection("areas").onSnapshot((snap) => {
      const documents = [];
      snap.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setAreasObj(documents);
    });
  }, []);

  console.log("ItemAcordeonArea=>", areasObj);

  const arrayAreas = areasObj.map((area) => {
    const { areas } = area;
    return areas;
  });
  console.log("AcordeonArea=>", arrayAreas);
  return (
    <div className="contenedor-cursos" id="cursos-id">
      <h3 className="titulo">TE OFRECEMOS:</h3>
      <Accordion flush>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Contabilidad</Accordion.Header>
          <Accordion.Body style={{ textAlign: "left" }}>
            <TablaCursos idarea="CON00" />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      {/* <Accordion flush>
        {arrayAreas.map((elemArea, index) => {
          <Accordion.Item eventKey="1">
            <Accordion.Header>{elemArea[index].nombre}</Accordion.Header>
            <Accordion.Body style={{ textAlign: "left" }}>
              <TablaCursos idarea={elemArea[index].codigo} />
            </Accordion.Body>
          </Accordion.Item>;
        })}
      </Accordion> */}
    </div>
  );
};

export default ItemAcordeonArea;
