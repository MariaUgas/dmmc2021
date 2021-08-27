import React,{useEffect, useState} from "react";
import store from "../../firebase/firebase.js";
import Table from "react-bootstrap/Table"


export const TablaCursos=({idarea})=>{
    const[objetoCursos, setObjetoCursos] = useState([]);

    useEffect(()=>{
        store.collection("cursos")
        .onSnapshot(snap=>{
            const documents=[];
            snap.forEach(doc=>{
            documents.push({id:doc.id, ...doc.data() })
        });
        setObjetoCursos(documents)
        
    })
}, [])

    const mapeo = objetoCursos.map((cursos)=>(
        
    cursos
    ))
    
    const filterByArea = mapeo.filter((curso) => {
        console.log("filterByArea");
        if (curso.idarea === idarea) {
          return true;
        } 
      });

      console.log(filterByArea)





return(

       <div className="tabla-cursos">
           
           <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                       <th scope="col">Curso</th>
                       <th scope="col">Modalidad</th>
                       <th scope="col">Costo</th>
                    </tr>
                </thead>
                <tbody>
                {
                       filterByArea.map((curso)=>(
                        <tr>
                            <td>{curso.curso}</td>
                            <td>{curso.modalidad}</td>
                            <td>{curso.costo}</td>
                        </tr>
                      ))

                    }
                </tbody>
            </Table>
       </div>
       
    )

    


}

export default TablaCursos;