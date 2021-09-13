import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import store from "../../firebase/firebase.js";



const ActzCatalogo = () => {
  
  const idAreaRef = useRef();
  const idCursoRef = useRef();
  const cursoRef = useRef();
  const costoRef = useRef();
  const modalidadRef = useRef();
  
  

  const handlerClick = () => {

    const  cursos =
      {
       
        idarea: idAreaRef.current.value,
        idcurso: idCursoRef.current.value,
        curso: cursoRef.current.value,
        costo: costoRef.current.value,
        modalidad: modalidadRef.current.value,
        
      }
      
      
    store.collection("cursos").add({
        
    idarea: idAreaRef.current.value,
    idcurso: idCursoRef.current.value,
    curso: cursoRef.current.value,
    costo: costoRef.current.value,
    modalidad: modalidadRef.current.value,
        
    })
    .then(() => {
      console.log("success");
    })
    .catch((error) => {
        alert("Error cargar: ", error);
    });

      
      idAreaRef.current.value = ""; 
      idCursoRef.current.value = "";
      cursoRef.current.value = "";
      costoRef.current.value = "";
      modalidadRef.current.value = "";
      
}

function eliminar(){

  store.collection("cursos").doc().delete()
  .then(() => {
      console.log("Document successfully deleted!");
  }).catch((error) => {
      console.error("Error removing document: ", error);
  });
}
  
return (
    <section className='actz-cur' >
      <div className='contenedor'>
        <div>
          <h2>Carga y Edicion de Cursos</h2>
        </div>
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <Form>
          
          <Form.Group className='mb-3' controlId='formGroupIdArea'>
              <Form.Label style={{ color: "#000000" }}>Area</Form.Label>
              <Form.Control type='text' placeholder='Ingrese el id del area' ref={idAreaRef} style={{ width: "100%" }} id="id-area"/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupcurso'>
              <Form.Label style={{ color: "#000000" }}> Curso</Form.Label>
              <Form.Control type='text' placeholder='Ingrese el curso' ref={cursoRef} style={{ width: "100%" }} id="n-curso"/>
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupmodalidad'>
              <Form.Label style={{ color: "#000000" }}>Modalidad</Form.Label>
              <Form.Control type='text' placeholder='Ingrese presencial o virtual' ref={modalidadRef} style={{ width: "100%" }} id="modal" />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupCosto'>
              <Form.Label style={{ color: "#000000" }}>Costo</Form.Label>
              <Form.Control type='text' placeholder='Ingrese el costo' ref={costoRef} style={{ width: "100%" }} id="cost"/>
            </Form.Group>
          </Form>

          <Button variant='primary' style={{marginRight:"50px"}} onClick={() => handlerClick()} id="boton">
            agregar 
          </Button>
          <Button variant="success" style={{marginRight:"50px"}}>
            Listar
          </Button>
          <Button variant="danger" onClick={()=>eliminar()}>
            Borrar
          </Button>
          
        </div>
      </div>
    </section>
  );
};
export default ActzCatalogo;
