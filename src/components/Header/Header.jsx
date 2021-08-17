import React from "react";
import Button from 'react-bootstrap/Button';
import BarNav from "../BarNav/BarNav";



function Header(){
    return(
     <>   
     
   
    <header className="hero">
        <BarNav  />
        
        <div className="textos-hero">
            <img src="img/ilap-logo.png" alt="logo"></img>
            <h1>Instituto Latinoamericano de Actualización Profesional</h1>
            <p><span>Excelencia</span> en enseñanza y aprendizaje</p>
            
        </div>
        <div className="svg-hero" style={{height: "150px", overflow: "hidden"}}>
            <svg viewBox="0 0 500 150" 
                preserveAspectRatio="none" 
                style={{height: "100%", width: "100%"}}>
                    <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" 
                        style={{stroke: "none", fill: "white"}}>
                    </path>
            </svg>
        </div>
        
    </header>

    </>
    
        
    )
}

export default Header;