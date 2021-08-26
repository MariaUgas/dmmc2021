import React, {useState, useEffect} from "react";
import {VerEdicion} from "../EdicionCursos/VerEdicion.jsx";
import store from "../../firebase/firebase.js";
import ActzCatalogo from '../VerCatalogo/ActzCatalogo.jsx';

export const EdicionCursos=()=>{
    const[curso, setCurso] = useState([]);

    useEffect(()=>{
        store.collection("cursos")
        .onSnapshot(snap=>{
            const documents=[];
            snap.forEach(doc=>{
            documents.push({id:doc.id, ...doc.data() })
        });
        setCurso(documents)
        
    })
}, [])

    

    return(

        <section>
            <div>
                <ActzCatalogo />
            </div>

            <div className="vitrina">
                {
                    curso.map((cursos)=>(
                        <VerEdicion key = {cursos.id} cursos={cursos} />
                    ))
                }
            </div>
        </section>
    )

    


}

export default EdicionCursos;