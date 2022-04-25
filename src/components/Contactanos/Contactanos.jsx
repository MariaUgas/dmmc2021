import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Contacto from "../Contacto/Contacto.jsx";

function Contactanos() {
 
  const [show2, setShow2] = useState(false);


  return (
    
    <div>

      <div className="svg-wave" style={{ height: "150px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#eeeaea" }}
          ></path>
        </svg>
      </div>
    
    
    <div className="info-ult">
      <div className="contenedor last-section">
        
        <div className="contenedor-textos-main" id="contacto-id">
          <div className="boton-contacto">

        <input
            type="submit"
            value="Contáctanos"
            className="cta"
            onClick={() => setShow2(true)}
          />
          </div>
          
          <div className="texto-contacto">

          <h2 className="titulo left">Elige lo mejor para tu Negocio!</h2>
          <p className="parrafo">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti molestias fugiat explicabo voluptates beatae ab excepturi laborum tempore! Labore natus culpa atque quis optio laborum ex veniam quasi quidem ad.
            Vel ratione quaerat magnam, velit dolores pariatur adipisci soluta accusamus assumenda? Vero tenetur accusantium ipsa in cum maxime facilis, nesciunt doloremque? Quisquam aliquid delectus perferendis quae quasi dolorum pariatur ea!
          </p>
          </div>
          
          
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
      
      
    </div>
    <div className="svg-wave" style={{ height: "150px", overflow: "hidden", background: "#eeeaea"}}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#77104c" }}
          ></path>
        </svg>
      </div>
    </div>
    
    
  );
}

export default Contactanos;
