import React from "react";
import { FaRegClone } from "react-icons/fa";
import ofr1 from "../../img/ofr1.jpg";
import ofr2 from "../../img/ofr2.jpg";

function Ofrecemos() {
  return (
    <div className="content-cards" id="media-id">
      <div className="card1">
        <article className="card">
          <FaRegClone className="pluma" />
          <h3>Conócenos</h3>
          <p>
            En el Instituto Latinoamericano de Actualizacion Profesional somos
            una gran familia de profesionales del area empresarial altamente
            calificados, poniendo su conocimiento a tu disposicion para el logro
            de tus metas.{" "}
          </p>
          <div className="content-media"></div>
        </article>
        <div className="img-ofr">
          <iframe
            width="530px"
            height="300px"
            src="https://www.youtube.com/embed/Abz905tklPA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>

      <div className="svg-wave" style={{ height: "150px", overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#f6f6f6" }}
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default Ofrecemos;
