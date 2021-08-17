import React from "react";
import { GrFacebook } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'


function Social(){
    return(
        
        <div class="social">
            <div className="social-flex">
                <a href="http://www.facebook.com/institutolap" target="_blank"><GrFacebook style={{fill:"#2c303b"}}/></a>
                <a href="http://www.twitter.com/institutolap" target="_blank" className="twitter"><AiOutlineTwitter style={{fill:"#2c303b"}}/></a>
                <a href="http://www.instagram.com/institutolap" target="_blank"><GrInstagram style={{fill:"#2c303b"}}/></a>
            </div>
             <div className="copyright">
                <p style={{fontSize:"small"}}><BiCopyright />Derechos reservados Instituto LAP - <span className="moodle">Soportado por Moodle.org</span> </p>
            </div>  
        </div>
    
    
        
    )
}

export default Social;