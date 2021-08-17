import React from "react";
import Button from 'react-bootstrap/Button';
import { FaFeatherAlt } from 'react-icons/fa';
import { FaRegClone } from 'react-icons/fa';

function Ofrecemos(){
    return(
        <section className="cards contenedor">
        
        <div className="content-cards">
            <article className="card">
                <FaRegClone className="pluma"/>
                <h3>Conócenos</h3>
                <p>En el Instituto Latinoamericano de Actualizacion Profesional somos una gran familia de profesionales del area empresarial altamente calificados, poniendo su conocimiento a tu disposicion para el logro de tus metas. </p>
                <div className="content-media">
                    <p>Video institucional aqui.</p>
                </div>
            </article>
            <article className="card">
                <FaRegClone className="pluma"/>
                <h3>Material informativo</h3>
                <p>En el Instituto Latinoamericano de Actualizacion Profesional somos una gran familia de profesionales del area empresarial altamente calificados, poniendo su conocimiento a tu disposicion para el logro de tus metas. </p>
                <div className="content-media">
                    <p>PDF´s informativos aqui</p>
                </div>
            </article>
            
        </div>
    </section>
   
    
    
        
    )
}

export default Ofrecemos;