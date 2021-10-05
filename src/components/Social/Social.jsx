import React from "react";
import { GrFacebook } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import avesidLogo from "../../img/avesidLogo.png"
import bcvLogo from "../../img/bcvLogo.png"
import icgLogo from "../../img/icgLogo.png"
import aulaVirtual from "../../img/aula-virtual.png";


function Social(){
    return(
        

        
        
        <div class="social">
            <div className="social-flex">
                <div className="institucional">
                <OverlayTrigger
                      overlay={
                        <Tooltip >
                          Aula Virtual
                        </Tooltip>
                      }
                      placement="top"
                    ><a href="https://aula.institutolap.com/" target="_blank" className="bcv"><img src={aulaVirtual} alt="aulaVirtual" width="80px"/></a></OverlayTrigger>
                
                <OverlayTrigger
                      overlay={
                        <Tooltip >
                          ICG Consultores
                        </Tooltip>
                      }
                    ><a href="http://www.consultoresicg.com/" target="_blank" className="bcv" alt="logo-icg" rel="noreferrer"><img src={icgLogo} width="60px"/></a></OverlayTrigger>
                     <OverlayTrigger
                      overlay={
                        <Tooltip >
                          Avesid.net
                        </Tooltip>
                      }
                    ><a href="https://www.avesid.net/" target="_blank" className="bcv" alt="logo-avesid" rel="noreferrer"><img src={avesidLogo} width="60px"/></a></OverlayTrigger>
                    <OverlayTrigger
                      overlay={
                        <Tooltip >
                          Banco Central de Venezuela
                        </Tooltip>
                      }
                    ><a href="http://bcv.org.ve/" target="_blank" className="bcv" alt="logo-bcv" rel="noreferrer" ><img src={bcvLogo} width="60px"/></a></OverlayTrigger>
                </div>
                <hr />
                <div className="sociales">
                     <OverlayTrigger
                      overlay={
                        <Tooltip >
                          Encuentranos en Facebook
                        </Tooltip>
                      }
                    ><a href="http://www.facebook.com/institutolap" target="_blank" className="twitter" rel="noreferrer"><GrFacebook style={{fill:"#2c303b", fontSize:"40px"}}/></a></OverlayTrigger>
                     <OverlayTrigger
                      overlay={
                        <Tooltip >
                          Siguenos en Twitter
                        </Tooltip>
                      }
                    ><a href="http://www.twitter.com/institutolap" target="_blank" className="twitter" rel="noreferrer"><AiOutlineTwitter style={{fill:"#2c303b", fontSize:"45px"}}/></a></OverlayTrigger>
                     <OverlayTrigger
                      overlay={
                        <Tooltip >
                          Siguenos en Instagram
                        </Tooltip>
                      }
                    ><a href="http://www.instagram.com/institutolap" target="_blank" className="twitter" rel="noreferrer"><GrInstagram style={{fill:"#2c303b", fontSize:"40px"}}/></a></OverlayTrigger>
                     <OverlayTrigger
                      overlay={
                        <Tooltip >
                          Contáctanos por WhatsApp
                        </Tooltip>
                      }
                    ><a href="http://wa.me/584167051749/?text=ILAP. %20Contacto%20desde%20el%20post" target="_blank" className="twitter" rel="noreferrer"><AiOutlineWhatsApp style={{fill:"#2c303b", fontSize:"45px"}}/></a></OverlayTrigger>
                </div>
                <div className="direccion">
                  <p>
                  <strong>Dirección:</strong> <br />

Av. Francisco de Miranda, Cruce con Calle <br /> Mohedano, Torre Sud America, Piso 11, <br /> Ofic. 11-A (Diagonal a la Torre Europa), <br /> El Rosal, Caracas. Teléfonos 58 212 9514689 <br /> y 58 212 9510794
 
                  </p>
                </div>
            </div>
             <div className="copyright">
                <p style={{fontSize:"1em"}}><BiCopyright />2021 Derechos reservados Instituto LAP - <span className="moodle">Soportado por Moodle.org</span> </p>
            </div>  
        </div>
        
    
    
        
    )
}

export default Social;