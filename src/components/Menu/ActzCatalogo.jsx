import { useRef } from "react";
import Form from "react-bootstrap/Form";
// import store from "../../firebase/firebase.js";



const ActzCatalogo = () => {
  
  
  const areaRef = useRef();
  const cursoRef = useRef();
  const costoRef = useRef();
//  const modalidadRef = useRef();
  

//   const handlerClick = () => {

//     const  cursos =
//       {
       
//         area: areaRef.current.value,
//         curso: cursoRef.current.defaultValue,
//         costo: costoRef.current.value,
//         modalidad: modalidadRef.current.value,
        
//       }
      
      
//     store.collection("cursos").doc().set({
        
//     area: areaRef.current.value,
//     curso: cursoRef.current.defaultValue,
//     costo: costoRef.current.value,
//     modalidad: modalidadRef.current.value,
        
//     })
//     .then(() => {
//         alert("Curso cargado con exito!");
//     })
//     .catch((error) => {
//         alert("Error cargar: ", error);
//     });

      
      
//       areaRef.current.value = "";
//       cursoRef.current.value = "";
//       costoRef.current.value = "";
//       modalidadRef.current.value = "";
      
// };
  return (
    <section className='actz-cur' >
      <div className='contenedor'>
        <div>
          <h2>Pruebas actualizacion de cursos</h2>
        </div>
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <Form>
            
            <Form.Group className='mb-3' controlId='formGroupArea'>
              <Form.Label style={{ color: "#000000" }}>Area</Form.Label>
              <Form.Control type='text' placeholder='Ingrese el area del curso' ref={areaRef} style={{ width: "100%" }} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupcurso'>
              <Form.Label style={{ color: "#000000" }}>curso</Form.Label>
              <Form.Control type='text' placeholder='Ingrese el curso' ref={cursoRef} style={{ width: "100%" }} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupCosto'>
              <Form.Label style={{ color: "#000000" }}>Costo</Form.Label>
              <Form.Control type='text' placeholder='Ingrese el costo' ref={costoRef} style={{ width: "100%" }} />
            </Form.Group>
                        {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="mb-3 checka">
                <Form.Check
                    inline
                    label="Presencial"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                />
                <Form.Check
                    inline
                    label="Virtual"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                />
                </div>
            ))}
           
          </Form>
          <div className="btn-actz">
            <input type="submit" className="cta actz" />

          </div>
        </div>
      </div>
    </section>
  );
};
export default ActzCatalogo;
