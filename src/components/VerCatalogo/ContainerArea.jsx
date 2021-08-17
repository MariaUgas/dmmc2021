import React, {useState, useEffect} from "react";
import {VerAreas} from "../VerCatalogo/VerAreas.jsx";
import store from "../../firebase/firebase.js";

export const ContainerArea=()=>{
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



    return(
        <div className="vitrina">
            {
                areas.map((areas)=>(
                    <VerAreas key = {areas.id} areas={areas} />
                ))
            }
        </div>
    )

    


}

export default ContainerArea;