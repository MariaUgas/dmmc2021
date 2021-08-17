import React from "react";
import { Link } from "react-router-dom";

const Menu=()=>{
    
    return(
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
               <ul>
                   <li className="nav-item">
                       <Link className="nav-link" to="/login">Login</Link>
                   </li>
                   <li className="nav-item">
                        <Link className="nav-link" to="/CrearNoticia">Actualizar Noticia</Link>
                   </li>
                   <li className="nav-item">
                        <Link className="nav-link" to="/ActzCatalogo">Actualizar Catalogo</Link>
                   </li>
               </ul>
           </nav>
        </div>
    
    
    )
}

export default Menu; 