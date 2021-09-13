import React, { useState } from "react";
import {auth} from "../../firebase/firebase.js";

const Login=()=>{

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [msgerror,setMsgerror] = useState(null)

    const RegistrarUsuario = (e)=>{
        
        e.preventDefault()
        try{
            auth.createUserWithEmailAndPassword(email, pass)
            alert("usuario registrado")
        }catch (e){
            console.log(e,msgerror)
        }

    }

    const LoginUsuario = ()=>{
        auth.signInWithEmailAndPassword(email, pass)
        .then((r)=> console.log(r))
        .catch((err)=>{
            /*auth/wrong/password*/
            if(err.code === "auth/wrong/password")
            setMsgerror("credenciales incorrectas!")
        })
    }

    return(
        <div className="caja-login">
        
            <form onSubmit={RegistrarUsuario} className="style-login">
                    <h3>LOGIN - ILAP</h3>
                    <input  onChange={(e)=>{setEmail(e.target.value)}}
                            className="form-control login-input" 
                            type="text" 
                            placeholder="Introduzca el Email" />
                    <input  onChange={(e)=>{setPass(e.target.value)}}
                            className="form-control login-input" 
                            type="text" 
                            placeholder="Introduce el Password" />
                    
                    
            </form>
            <button className="btn btn-success btn-inicio" onClick={LoginUsuario}>
                Iniciar Sesion
            </button>
        </div>
    
    
    )
}

export default Login 