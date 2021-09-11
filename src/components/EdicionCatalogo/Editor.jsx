import React, { useEffect, useState } from "react";
import store from "../../firebase/firebase.js";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


 export const Editor = ({ idarea }) => {
  
  const [objetoCursos, setObjetoCursos] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(null);
  const [modalidad, setModalidad] = useState("");
  const [curso, setCurso] = useState("");
  const [costo, setCosto] = useState("");
  const [idCatalogo, setIdcatalogo] = useState("");
  const [error, setError] = useState("");
  const [cursos, setCursos] = useState([]);
  const [idcurso, setIdcurso] = useState("")
  



  useEffect( ()=>{
    const getCursos =async()=>{
        const {docs} = await store.collection("cursos").get()
        const nuevoArray = docs.map(item =>({id:item.id, ...item.data()}))
        setCursos(nuevoArray)
    }
    getCursos()
},[])

  const mapeo = objetoCursos.map((cursos) => cursos);

  const filterByArea = mapeo.filter((curso) => {
    if (curso.idarea === idarea) {
      return true;
    }
    
  });

    console.log(filterByArea)

    const setCatalogo = async(e) =>{
      e.preventDefault()
      
     

      const itemCursos = {
         
          idcurso: idcurso,
          curso: curso,
          modalidad: modalidad,
          costo: costo 
      }

      try{
          const data = await store.collection("cursos").add(itemCursos)
          const {docs} = await store.collection("cursos").get().limit(6)
          const nuevoArray = docs.map(item =>({id:item.id, ...item.data()}))
          setCursos(nuevoArray)
          alert("curso agregado")
      }catch(e){
          console.log(e)
      }

     
      setIdcurso("");
      setCurso("");
      setModalidad("");
      setCosto("");


  }


   
    const BorrarCurso = async (id)=>{
      try{
          await store.collection("cursos").doc(id).delete()
          const {docs} = await store.collection("cursos").get()
          const nuevoArray = docs.map(item =>({id:item.id, ...item.data()}))
          setCursos(nuevoArray)
      }catch(e){
          console.log(e)
      }
  }

  const pulsarActualizar = async(id)=>{
    try{
        const data = await store.collection("cursos").doc(id).get();
        const {idcurso, curso, modalidad, costo} = data.data();
        
        
        setIdcurso(idcurso)
        setCurso(curso)
        setModalidad(modalidad)
        setCosto(costo)
        setIdcatalogo(id)
        setModoEdicion(true)
        console.log(id)
    }catch(e){
        console.log(e)
    }
    
}

const setUpdate = async(e) =>{
  e.preventDefault();
  
  const cursoUpdate = {
      
      idcurso: idcurso,
      curso: curso,
      modalidad: modalidad,
      costo: costo
  }
  try{
      await store.collection("cursos").doc(idCatalogo).set(cursoUpdate)
      const {docs} = await store.collection("cursos").get()
      const nuevoArray = docs.map(item =>({id:item.id, ...item.data()}))
      setCursos(nuevoArray)
  }catch(e){
      console.log(e)
  }
      
      setIdcurso("")
      setCurso("")
      setModalidad("")
      setCosto("")
      setModoEdicion(false)
}


return(
  <section>

    <div className="accordion-body">
       <div className='contenedor'>
            <div>
              <h2>Carga y Edicion de Cursos</h2>
            </div>
            <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
              <Form onSubmit={modoEdicion ? setUpdate : setCatalogo}>
                <Form.Group className='mb-3' controlId='formGroupcurso'>
                  <Form.Label style={{ color: "#000000" }}> Curso</Form.Label>
                  <Form.Control type='text' placeholder='Ingrese el curso' onChange={(e)=>{setCurso(e.target.value)}} style={{ width: "100%" }} id="n-curso"/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupmodalidad'>
                  <Form.Label style={{ color: "#000000" }}>Modalidad</Form.Label>
                  <Form.Control type='text' placeholder='Ingrese presencial o virtual' onChange={(e)=>{setModalidad(e.target.value)}} style={{ width: "100%" }} id="modal" />
                </Form.Group>
                <Form.Group className='mb-3' controlId='formGroupCosto'>
                  <Form.Label style={{ color: "#000000" }}>Costo</Form.Label>
                  <Form.Control type='text' placeholder='Ingrese el costo' onChange={(e)=>{setCosto(e.target.value)}} style={{ width: "100%" }} id="cost"/>
                </Form.Group>
              </Form>
              {
                 modoEdicion ?
                                    (
                                      <Button variant='primary' style={{marginRight:"50px"}}>
                                      Editar 
                                    </Button>
                                    )
                                    :
                                    (
                                      <Button variant='primary' style={{marginRight:"50px"}}>
                                      Agregar 
                                    </Button>
                                    )
                  }
              </div>
          </div>
          </div>
        <div className="tabla-cursos">
            <Table striped bordered hover size="sm" style={{width:"90%"}}>
                <thead>
                    <tr>
                       <th scope="col">Curso</th>
                       <th scope="col" width="20%">Modalidad</th>
                       <th scope="col" width="15%">Costo (USD)</th>
                       
                    </tr>
                </thead>
                <tbody>
                {
                       filterByArea.map((curso)=>(
                        <tr>
                            <td>{curso.curso}</td>
                            <td>{curso.modalidad}</td>
                            <td>{curso.costo}</td>
                            <td> <Button variant="primary" onClick={(id)=>{pulsarActualizar(id)}}>
                            Editar
                        </Button></td>
                            <td> <Button variant="danger" onClick={(id)=>{BorrarCurso(id)}}>
                            Borrar
                        </Button></td>
                        </tr>
                      ))

                    }
                </tbody>
            </Table>
       </div>
  </section>
         
    
    
       
    )

}

export default Editor;
