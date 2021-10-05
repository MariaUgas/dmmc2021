import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
import { GiGraduateCap } from "react-icons/gi";
import { BiDownArrow } from "react-icons/bi";
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
        <p className="parrafo">
          El Instituto Latinoamericano de Actualización Profesional, ILAP, nace
          con el objetivo de satisfacer las crecientes necesidades de
          adiestramiento dentro del mundo empresarial en Latinoamérica a través
          de capacitación, tanto presencial como online, para facilitar el
          aprendizaje e impulsar el talento humano. <span className="resp-ocult">Conoce mas de nosotros en nuestra galeria de <a href="javascript:void(0)" target="" onClick={() => setShow(true)} style={{textDecoration:"none", color:"black", fontWeight:"bold"}}>imágenes</a></span> 
         </p>
      <div className="btn-imp">
        <input type="submit" className="cta" value="+Info" onClick={() => setShow2(true)} />
      </div>
      
      
      <div className="modal">
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="lg" 
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="modal-galeria">Nuestro Ambiente</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Galeria/>
        </Modal.Body>
      </Modal>
      <Modal
        show={show2}
        onHide={() => setShow2(false)}
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
              <strong>¿Quiénes Somos?</strong><br /><br /> 
El Instituto Latinoamericano de Actualización Profesional (ILAP) fue fundado por un grupo de emprendedores venezolanos en alianza con ICG Consultores para satisfacer las crecientes necesidades de adiestramiento dentro del mundo empresarial en Latinoamérica a través de capacitación, tanto presencial como eLearning, facilitando el aprendizaje e impulsando el talento humano.
Continuando con la labor de Softline Consultores Gerenciales, una empresa con más de 25 años de experiencia capacitando profesionales, el ILAP brinda un enfoque con nuevas herramientas innovadoras potenciando la educación a distancia, buscando de esta manera brindar más oportunidades de crecimiento en cualquier rincón del continente. <br /><br />

<strong> Nuestros productos y Servicios</strong><br /><br />

<strong>CURSOS:</strong>  Ofrecemos el diseño, la coordinación y la ejecución de cursos, talleres, conferencias, seminarios y programas de adiestramiento, de acuerdo con las necesidades específicas de nuestros clientes, enmarcado sobre la realidad, exigencias y políticas propias de su organización, donde la orientación, comunicación y acuerdos son las pautas que regulan a nuestro equipo de trabajo. Nuestros cursos se llevan a cabo de forma presencial en nuestras instalaciones o bajo la modalidad InCompany ajustado al horario y lugar de cada empresa y eLearning a través de nuestra página web. <br /> <br />

<strong>DIPLOMADOS:</strong>  Nuestros diplomados avalados por la Universidad Central de Venezuela (UCV) se encuentran divididos en unidades que pueden cursarse de forma separada; tienen una duración aproximada de 100 horas académicas y se certifican mediante evaluación continua. Se ofrecen al público en nuestra programación trimestral o Incompany, en modalidad presencial y/o eLearning. <br /><br />

<strong>Responsabilidad Social</strong> <br /><br />

A través de un acto que trasciende la necesidad de proyección de imagen institucional y la pura filantropía, asumimos la responsabilidad, hoy más que nunca ineludible, de brindar mejoras en la calidad de vida y bienestar para los ciudadanos, estableciendo una alianza estratégica con la Asociación Venezolana para el Síndrome de Down (AVESID), para prestar todo el apoyo necesario para la realización de sus actividades y formación profesional de su personal. <br /><br />

              </p>
              <BiDownArrow className="icono"/>
          </article>
        </div>
        </Modal.Body>
      </Modal>
     
    
     
      </div>
      </div>
    </section>
   
  );
}

export default Impulsa;
