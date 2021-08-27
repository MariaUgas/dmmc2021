import { Accordion } from 'react-bootstrap';
import store from "../../firebase/firebase.js";
import Button from "react-bootstrap/Button";


export const VerEdicion = ({cursos})=>{
    const { idarea, idcurso, curso, modalidad, costo} = cursos 
    
    store.collection("cursos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          /*console.log(`${doc.id} => ${doc.data()}`)*/
        })
    })

    function eliminar(){

        store.collection("cursos").doc(cursos.id).delete()
        .then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

   

    function editar(idarea, idcurso, curso, modalidad, costo){

        
        document.getElementById("id-area").value= idarea;
        document.getElementById("id-curso").value= idcurso;
        document.getElementById("n-curso").value= curso;
        document.getElementById("modal").value= modalidad;
        document.getElementById("cost").value= costo;
        var boton = document.getElementById("boton");
        boton.innerHTML = "Editar";

        boton.onClick = function(){

            const editarRef = store.collection("cursos").doc(cursos.id).set();

            const idarea = document.getElementById("idarea").value;
            const idcurso = document.getElementById("idcurso").value;
            const curso = document.getElementById("curso").value;
            const modalidad = document.getElementById("modalidad").value;
            const costo = document.getElementById("costo").value;
            
            return editarRef.update({
               idarea:idarea,
               idcurso:idcurso,
               curso:curso,
               modalidad:modalidad,
               costo:costo

            })
            .then(function(){
                console.log("Actualizacion exitosa");
                boton.innerHTML = "Guardar";
            })
            .catch(function(error){
                console.error("Error actualizando: ", error);
            })
        }

    }
  
    return ( 
    
    
         <div>
         
            <Accordion flush >
            <Accordion.Item eventKey="0">
                <Accordion.Header>{idarea}</Accordion.Header>
                <Accordion.Body style={{textAlign:"left"}}>
                   
                        <p><b>Codigo del curso:</b> {idcurso}</p>
                        <p><b>Nombre del curso:</b> {curso}</p>
                        <p><b>Modalidad:</b> {modalidad}</p>
                        <p><b>Costo:</b> {costo}</p>
                        <Button variant="primary" style={{marginRight:"15px"}} onClick={()=>editar( idarea, idcurso, curso, modalidad, costo)}>
                            Editar
                        </Button>
                        <Button variant="danger" onClick={()=>eliminar(cursos.id)}>
                            Eliminar
                        </Button>
                        


                    
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
         
     </div>
    
       
      )
  }
  
  
  
  export default VerEdicion;