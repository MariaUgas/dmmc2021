import React from "react";


export const Noticia = ({ noticia }) => {
  const { titulo, autor, contenido, fecha, image } = noticia;
  const htmlNews = contenido.substring(1, contenido.length - 1);

  return (
    <section className="noticia-ddia" id="noticia-id">
      
      <div className="caja-not">
        <div className="caja1">
          <div className="title-not">
            <h1 className="titulo left">{titulo}</h1>
          </div>
          <div className="caja2">
            <img className="img-not" src={image} alt="noticia" />
          </div>

          <div className="body-not" id="txt1">
            <div dangerouslySetInnerHTML={{ __html: htmlNews }}></div>
          </div>

          <div className="fmt-fecha">
            <p>
              <b><em>{autor}</em></b>
            </p>
            <p>
              <b><em>{fecha}</em></b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Noticia;
