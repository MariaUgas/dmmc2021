import React, {useState, useEffect} from "react";
import {Noticia} from "../Noticia/Noticia.jsx";
import store from "../../firebase/firebase.js";

export const Container=()=>{
    const[noticias, setNoticias] = useState([]);

    useEffect(()=>{
        store.collection("noticia")
        .onSnapshot(snap=>{
            const documents=[];
            snap.forEach(doc=>{
            documents.push({id:doc.id, ...doc.data() })
        });
        setNoticias(documents)
    })
}, [])

    return(
        <div className="vitrina">
            {
                noticias.map((noticia)=>(
                    <Noticia key = {noticia.id} noticia={noticia} />
                ))
            }
        </div>
    )

    


}

export default Container;