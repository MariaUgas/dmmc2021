import React, {useState, useEffect} from "react";
import {VerCatalogo} from "../VerCatalogo/VerCatalogo.jsx";
import store from "../../firebase/firebase.js";

export const ContainerCat=()=>{
    const[cursos, setCursos] = useState([]);

    useEffect(()=>{
        store.collection("catalogo")
        .onSnapshot(snap=>{
            const documents=[];
            snap.forEach(doc=>{
            documents.push({id:doc.id, ...doc.data() })
        });
        setCursos(documents)
    })
}, [])



    return(
        <div className="vitrina">
            {
                cursos.map((cursos)=>(
                    <VerCatalogo key = {cursos.id} cursos={cursos} />
                ))
            }
        </div>
    )

    


}

export default ContainerCat;