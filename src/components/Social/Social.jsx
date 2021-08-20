import React from "react";
import { GrFacebook } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'
import { AiOutlineWhatsApp } from 'react-icons/ai'


function Social(){
    return(
        
        <div class="social">
            <div className="social-flex">
                <a href="http://www.facebook.com/institutolap" target="_blank" className="twitter" ><GrFacebook style={{fill:"#2c303b"}}/></a>
                <a href="http://www.twitter.com/institutolap" target="_blank" className="twitter"><AiOutlineTwitter style={{fill:"#2c303b"}}/></a>
                <a href="http://www.instagram.com/institutolap" target="_blank" className="twitter"><GrInstagram style={{fill:"#2c303b"}}/></a>
                <a href="http://wa.me/584140176069/?text=Hola%20Instituto%20LAP%20desde%20el%20post" className="twitter"><AiOutlineWhatsApp style={{fill:"#2c303b"}}/></a>
            </div>
             <div className="copyright">
                <p style={{fontSize:"small"}}><BiCopyright />Derechos reservados Instituto LAP - <span className="moodle">Soportado por Moodle.org</span> </p>
            </div>  
        </div>
    
    
        
    )
}

export default Social;