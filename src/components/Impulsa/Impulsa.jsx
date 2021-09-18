import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import imagen1 from "../../img/imagen1.jpg";


function Impulsa() {

  const [show, setShow]=useState(null)


  return (
    <section className="wave-contenedor website">
      
          <iframe
            width="530px"
            height="300px"
            style={{marginTop:"60px"}}
            src="https://www.youtube.com/embed/Abz905tklPA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
      
      
      <div className="contenedor-textos-main">
        <h2 className="titulo left2">Impulsa tu talento!!!</h2>
        <p className="parrafo2">
          El Instituto Latinoamericano de Actualización Profesional, ILAP, nace
          con el objetivo de satisfacer las crecientes necesidades de
          adiestramiento dentro del mundo empresarial en Latinoamérica a través
          de capacitación, tanto presencial como online, para facilitar el
          aprendizaje e impulsar el talento humano.
        </p>
      
      <input type="submit" className="cta" value="+Info" onClick={() => setShow(true)} />
      </div>
      <div className="modal">
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
          <h2>Mision y Vision del Instituto AQUI</h2>
        </Modal.Body>
      </Modal>
      </div>
    </section>
   
  );
}

export default Impulsa;
