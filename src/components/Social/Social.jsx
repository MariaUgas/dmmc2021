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


function Social(){
    return(
        

        
        
        <div class="social">
            <div className="social-flex">
                <div className="institucional">
                
                    <a href="http://www.consultoresicg.com/" target="_blank" className="bcv" rel="noreferrer"><img src={icgLogo} width="60px"/></a>
                     <OverlayTrigger
                      overlay={
                        <Tooltip >
                          Avesid.net
                        </Tooltip>
                      }
                    ><a href="https://www.avesid.net/" target="_blank" className="bcv" rel="noreferrer"><img src={avesidLogo} width="60px"/></a></OverlayTrigger>
                    <OverlayTrigger
                      overlay={
                        <Tooltip >
                          Banco Central de Venezuela
                        </Tooltip>
                      }
                    ><a href="http://bcv.org.ve/" target="_blank" className="bcv" rel="noreferrer" ><img src={bcvLogo} width="60px"/></a></OverlayTrigger>
                </div>
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
            </div>
             <div className="copyright">
                <p style={{fontSize:"1em"}}><BiCopyright />2021 Derechos reservados Instituto LAP - <span className="moodle">Soportado por Moodle.org</span> </p>
            </div>  
        </div>
        
    
    
        
    )
}

export default Social;