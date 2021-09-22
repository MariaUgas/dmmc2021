import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import Galeria from "../Galeria/Galeria";




function Ofrecemos() {
  return (
    <div className="content-cards" id="media-id">
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
/*<iframe
            width="530px"
            height="300px"
            src="https://www.youtube.com/embed/Abz905tklPA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>*/
