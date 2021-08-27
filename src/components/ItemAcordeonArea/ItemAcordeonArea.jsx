import React, {useState, useEffect} from "react";
import store from "../../firebase/firebase.js";
import { Accordion } from 'react-bootstrap';
import TablaCursos from "../TablaCursos/TablaCursos.jsx";


export const ItemAcordeonArea=()=>{
    const[areas, setAreas] = useState([]);

    useEffect(()=>{
        store.collection("areas")
        .onSnapshot(snap=>{
            const documents=[];
            snap.forEach(doc=>{
            documents.push({id:doc.id, ...doc.data() })
        });
        setAreas(documents)
    })
}, [])

console.log(areas)



    return(

        <div className="contenedor-cursos" id="cursos-id">

    <h3 className="titulo">TE OFRECEMOS:</h3>
        <Accordion flush >
            {
                areas.map((area, indice)=>{
                    console.log(area);
                    <Accordion.Item eventKey={indice}>
                    <Accordion.Header>{area.nombre}</Accordion.Header>
                    <Accordion.Body style={{textAlign:"left"}}>
                      
                      <TablaCursos idarea={area.codigo} />
                    
                    </Accordion.Body>
                  </Accordion.Item>
                })
            }
        </Accordion>
    </div>
        
     
    )

    


}

export default ItemAcordeonArea;