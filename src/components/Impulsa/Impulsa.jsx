import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import { GiGraduateCap } from "react-icons/gi";
import Galeria from "../Galeria/Galeria";


function Impulsa() {

  const [show, setShow]=useState(null)
  const [show2, setShow2]=useState(null)


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
          aprendizaje e impulsar el talento humano. Conoce mas de nosotros en nuestra galeria de <a href="javascript:void(0)" target="" onClick={() => setShow2(true)}>imágenes</a>
         </p>
      <div className="btn-imp">
        <input type="submit" className="cta" value="+Info" onClick={() => setShow(true)} />
      </div>
      
      
      <div className="modal">
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ maxWidth: "none"}}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="card1">
          <article className="conocenos">
            <GiGraduateCap className="icono" />
              <p>
                En el Instituto Latinoamericano de Actualizacion Profesional somos
                una gran familia de profesionales del area empresarial altamente
                calificados, poniendo su conocimiento a tu disposicion para el logro
                de tus metas.{" "}
              </p>
          </article>
        </div>
        </Modal.Body>
      </Modal>
      </div>
      <div className="modal">
    
      <Modal
        show={show2}
        onHide={() => setShow2(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{ maxWidth: "760px"}}
        size="xl"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-galeria">Nuestro Ambiente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Galeria/>
        </Modal.Body>
      </Modal>
      </div>
      </div>
    </section>
   
  );
}

export default Impulsa;
