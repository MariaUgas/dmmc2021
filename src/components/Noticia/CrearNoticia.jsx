import { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import store from "../../firebase/firebase.js";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";


const CrearNoticia = () => {
  
  let responseString = "";
  const handleEditorChange = (content) => {
    responseString= "\"".concat(content).concat("\"");

  };

  const fecha = new Date().toLocaleDateString();
  const fechaRef = useRef();
  const tituloRef = useRef();
  const contenidoRef = useRef();
  const autorRef = useRef();
  const imagenRef = useRef();

  const handlerClick = () => {

    // const publicacion =
    //   {
       
    //     titulo: tituloRef.current.value,
    //     fecha: fechaRef.current.defaultValue,
    //     contenido: contenidoRef.current.value,
    //     autor: autorRef.current.value,
    //     image: imagenRef.current.value,
    //   }
      
      
      

      store.collection("noticia").doc("p3TjDoNXKrBGnvgebuFi").set({
        titulo: tituloRef.current.value,
        fecha: fechaRef.current.defaultValue,
        contenido: responseString,
        autor: autorRef.current.value,
        image: imagenRef.current.value,
    })
    .then(() => {
        alert("Noticia actualizada con exito!");
    })
    .catch((error) => {
        alert("Error alactualizar: ", error);
    });
     
    
      
      tituloRef.current.value = "";
     // contenidoRef.current.value = "";
      autorRef.current.value = "";
      imagenRef.current.value = "";

      
     
  };


  return (
    
     <div className="contenedorN">
        <div className="tit-crear-n">
          <h2>Formulario para la creación de noticias</h2>
        </div>
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <Form>
            <Form.Group className='mb-3' controlId='formGroupFecha'>
              <Form.Label style={{ color: "#000000" }}>Fecha</Form.Label>
              <Form.Control type='text' readOnly defaultValue={fecha} ref={fechaRef} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupTitulo'>
              <Form.Label style={{ color: "#000000" }}>Titulo</Form.Label>
              <Form.Control type='text' placeholder='Ingrese Titulo' ref={tituloRef} style={{ width: "100%" }} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupContenido'>
              <Form.Label style={{ color: "#000000" }}>Contenido </Form.Label>
              <SunEditor
                setContents=""
                showToolbar={true}
                //ref={contenidoRef}
                placeholder="Ingrese contenido..."
                minHeight="160px !important"
                //height="160px"
                onChange={handleEditorChange}
                setDefaultStyle="height: auto"
                setOptions={{
                  buttonList: [
                    ["undo", "redo"],
                    [
                      "bold",
                      "underline",
                      "italic",
                      "strike",
                      "list",
                      "align",
                      "fontSize",
                      "formatBlock",
                    ]
                  ]
                }}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupAutor'>
              <Form.Label style={{ color: "#000000" }}>Autor</Form.Label>
              <Form.Control type='text' placeholder='Ingrese nombre del Autor' ref={autorRef} style={{ width: "100%" }} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupImagen'>
              <Form.Label style={{ color: "#000000" }}>URL de Imagen</Form.Label>
              <Form.Control
                type='text'
                placeholder='Direccion de imagen, ejemplo: http://path/nombre-imagen.png'
                ref={imagenRef}
                style={{ width: "100%" }}
              />
            </Form.Group>
          </Form>
          <div className="btn-not">
            <Button variant='primary' onClick={() => handlerClick()}>
              Crear Noticia
            </Button>
          </div>
        </div>
        </div>
  );
};
export default CrearNoticia;
