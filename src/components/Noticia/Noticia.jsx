import React from "react"

export const Noticia = ({noticia})=>{
  const { titulo, autor, contenido, fecha, image} = noticia
  console.log("contenido => ",contenido);

  return ( 
    <section className="noticia-ddia">
    <h4><u>Noticia del día</u></h4>
    <div className="caja-not" >
    <div className="caja1">
      <div className="title-not">
        <h2 className='titulo left'>{titulo}</h2>
      </div>
      <div className="caja2">
          <img className="img-not" src={image} alt='noticia' />
        </div>

      <div className="body-not" id="txt1" >  
         {
           //document.getElementById("txt1").innerHTML= contenido
           contenido
         }
      </div>
        
        <div className='fmt-fecha'>
          <p><b>{autor}</b></p>
          <p><b>{fecha}</b></p>
        </div>
        </div>
        

      </div>
      </section>
     
    )
}



export default Noticia;