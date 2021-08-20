import { useEffect, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import store from "../../firebase/firebase.js";
import SunEditor from "suneditor-react";
import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { GoInfo } from "react-icons/go";

import "suneditor/dist/css/suneditor.min.css";

const CrearNoticia = () => {

  const fecha = new Date().toLocaleDateString();
  const fechaRef = useRef();
  const tituloRef = useRef();
  const autorRef = useRef();
  const imagenRef = useRef();
  const parrafosRef = useRef();

  const [send, setSend] = useState(false);
  const [show, setShow] = useState(false);
  const [tipoAlert, setTipoAlert] = useState('')
  const [message, setMessage] = useState('');


  const handleEditorChange = (content) => {
    parrafosRef.current.value = "\"".concat(content).concat("\"");
  };

  const handleClean = () => {
    tituloRef.current.value = "";
    // contenido.current.value = "";
    autorRef.current.value = "";
    imagenRef.current.value = "";
  }
  // useEffect(() => {
  //   tituloRef.current.value = "Ley de Texas modifica la educación sobre raza ";
  //   // contenido.current.value = "";
  //   autorRef.current.value = "Leuzga";
  //   imagenRef.current.value = "https://cnnespanol.cnn.com/wp-content/uploads/2021/08/2F210810122252-01-lupe-aleman-super-tease.jpg?resize=1024,576";
  
  // },[])
  useEffect(() => {
    if(send===false) return;
    store.collection("noticia").doc("p3TjDoNXKrBGnvgebuFi").set({
      titulo: tituloRef.current.value,
      fecha: fechaRef.current.defaultValue,
      contenido: parrafosRef.current.value,
      autor: autorRef.current.value,
      image: imagenRef.current.value,
    }).then
      (() => {
        setTipoAlert('info');
        setMessage('Se guardó la data del formulario exitosamente.');
      }).catch
      ((error) => {
        setTipoAlert('error');
        setMessage('La operacion "Guardar" no tuvo Exito.')
      });
      setShow(true);
      handleClean();

    return (
      setSend(false)
    )
  },[send])

  return (
    <>
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
              <Form.Control type='hidden' ref={parrafosRef}/>
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
            <Button variant='primary' onClick={() => setSend(true)}>
              Crear Noticia
            </Button>
          </div>
        </div>
        </div>
        <ToastContainer className="p-3" position="top-end" >
          <Toast onClose={() => setShow(false)} bg={tipoAlert} show={show} autohide delay={4000}>
            <Toast.Header closeButton={false}>
              <GoInfo size={24}/>
              <strong className="me-auto">&nbsp;&nbsp;&nbsp;Información</strong>
              <small>Justo ahora...</small>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        </ToastContainer>
      </>  
  );
};
export default CrearNoticia;
