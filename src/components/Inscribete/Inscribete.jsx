import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Pago from "../../components/Pago/Pago.jsx";
import Contacto from "../../components/Contacto/Contacto.jsx";

function Inscribete() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <section className="info-last">
      <div className="contenedor last-section">
        
        <div className="contenedor-textos-main" id="contacto-id">
          <h2 className="titulo left">Elige lo mejor para tu futuro!</h2>
          <p className="parrafo">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ullam
            aliquam perspiciatis, dolore quaerat odio laudantium adipisci
            laboriosam libero quis voluptas cupiditate exercitationem soluta
            distinctio magnam dignissimos. Aspernatur, veniam aperiam.
          </p>
          <input
            type="submit"
            value="Contáctanos"
            className="cta"
            onClick={() => setShow2(true)}
          />
        </div>
        <div className="contenedor-textos-main" id="inscribete-id">
          <h2 className="titulo left">Elige lo mejor para tu futuro!</h2>
          <p className="parrafo">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ullam
            aliquam perspiciatis, dolore quaerat odio laudantium adipisci
            laboriosam libero quis voluptas cupiditate exercitationem soluta
            distinctio magnam dignissimos. Aspernatur, veniam aperiam.
          </p>
          <input
            type="submit"
            value="Notificación de Pago"
            className="cta"
            onClick={() => setShow(true)}
          />
        </div>
      </div>

      <Modal
        show={show2}
        onHide={() => setShow2(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ maxWidth: "none" }}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Contacto />
        </Modal.Body>
      </Modal>
      
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ maxWidth: "none" }}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Pago />
        </Modal.Body>
      </Modal>
      
      <div className="svg-wave" style={{ height: "150px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#f38115" }}
          ></path>
        </svg>
      </div>
    </section>
    
  );
}

export default Inscribete;
