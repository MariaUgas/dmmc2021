import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import { Col, Form , Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";





function Contacto(){
  const nombreRef= useRef();
  const emailRef= useRef();
  const tlfRef= useRef();
  const itemPaisRef= useRef();
  const itemCursoRef= useRef();
 
  
  /*const handlerOnChange=()=> {
    tlfRef.value = this.value;
    if((this.value).trim() !== '') {
      tlfRef.disabled = false;
    } else {
      tlfRef.disabled = true
    }
  }*/
  const handlerClick = () => {

  const contacto =
      [{
        id: uuidv4,
        nombre: nombreRef.current.value,
        email: emailRef.current.value,
        codigoArea: itemPaisRef.current.value,
        telefono: tlfRef.current.value,
        curso: itemCursoRef.current.value,
        
      }]
      console.log(JSON.stringify(contacto,null,2))


      nombreRef.current.value= "";
      emailRef.current.value= "";
      itemPaisRef.current.value= "";
      tlfRef.current.value= "";
      itemCursoRef.current.value= "";
      
  };
    return(
        <footer id="contacto">
        
        <div className="contenedor">
          <div className="reductor">
            <h2 className="titulo" id="contacto-id">Contáctanos</h2>
            <Form>
              <Form.Group className='mb-3' controlId='formGroupNombre'>
                <Form.Label style={{ color: "#000000" }}>Nombre</Form.Label>
                <Form.Control type='text' placeholder='Ingrese nombre completo' ref={nombreRef} style={{ width: "100%", height:"50px"}} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label style={{ color: "#000000" }}>Email</Form.Label>
                <Form.Control type="email" placeholder='Ingrese email Ejemplo abc@xyz.xx' ref={emailRef} style={{ width: "100%", height:"50px" }} />
              </Form.Group>
              <Row className="mb-4 resp-cont">
                <Form.Group as={Col} controlId="formGrroupCodigo" md={4}>
                  <Form.Label style={{ color: "#000000", width:"250px !important", display:"inline"}}>Código de area</Form.Label>
                  <Form.Select aria-label="Default select example" style={{ height:"50px", position:"relative", marginTop:"8px" }} ref={itemPaisRef} /*onChange={()=>handlerOnChange()}*/ >
                    <option value="">País</option>
                    <option value="+58" className="ven">Venezuela</option>
                    <option value="+57">Colombia (+57)</option>
                    <option value="+507">Panamá (+507)</option>
                    <option value="+1">U.S.A. (+1)</option>
                    <option value="+54">Argentina (+54)</option>
                    <option value="+297">Aruba (+297)</option>
                    <option value="+591">Bolivia (+591)</option>
                    <option value="+55">Brasil (+55)</option>
                    <option value="+1">Canada (+1)</option>
                    <option value="+56">Chile (+56)</option>
                    <option value="+506">Costa Rica (+506)</option>
                    <option value="+53">Cuba (+53)</option>
                    <option value="+599">Curazao (+599)</option>
                    <option value="+593">Ecuador (+593)</option>
                    <option value="+503">El Salvador (+503)</option>
                    <option value="+502">Guatemala (+502)</option>
                    <option value="+509">Haiti (+509)</option>
                    <option value="+504">Honduras (+504)</option>
                    <option value="+1-876">Jamaica (+1-876)</option>
                    <option value="+52">Mexico (+52)</option>
                    <option value="+505">Nicaragua (+505)</option>
                    <option value="+595">Paraguay (+595)</option>
                    <option value="+51">Peru (+51)</option>
                    <option value="+1-787">Puerto Rico (+1-787)</option>
                    <option value="+1-809">Rep. Dominicana (+1-809)</option>
                    <option value="+55">Uruguay (+55)</option>
                    <option value="+">Otros</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId='formGroupTlf'>
                  <Form.Label style={{ color: "#000000" }}>Teléfono</Form.Label>
                  <Form.Control  type='text' placeholder='Ingrese teléfono. Ejemplo 1234567' ref={tlfRef} style={{ width: "100%", height:"50px" }} />
                </Form.Group>
              </Row> 
              <Row className="mb-3"> 
              <Form.Group className='mb-3' controlId='formGroupCursos'>
                <Form.Label style={{ color: "#000000" }}>Cursos</Form.Label>
                <Form.Select aria-label="Default select example" ref={itemCursoRef} style={{ width: "100%", height:"50px" }} >
                  <option value="">Seleccione un curso</option>
                  <option value="C001">Certificacion en gestion integral de credito</option>
                  <option value="C002">Contabilidad</option>
                  <option value="C003">Desarrollo personal - Laboral</option>
                  <option value="C004">Desarollo Supervisorio</option>
                  <option value="C005">Finanzas</option>
                  <option value="C006">Gestion integral del talento humano</option>
                  <option value="C007">Informatica</option>
                  <option value="C008">Seguridad y salud laboral</option>
                  <option value="C009">Legal</option>
                </Form.Select>
              </Form.Group>
              </Row>
            </Form>
            <div className="btnContacto">
            <Button variant='primary' style={{background:"#2c303b"}} onClick={() => handlerClick()}>
            Enviar
            </Button>
            </div>
            </div> 
        </div>
        </footer>
    )
}

export default Contacto;