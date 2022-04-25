import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState } from "react";
import { Formik } from "formik";
import { Col, Form, Row } from "react-bootstrap";
import { RadioButton, RadioGroup } from "@trendmicro/react-radio";
import Button from "react-bootstrap/Button";


function Contacto() {
  const nombreRef = useRef();
  const emailRef = useRef();
  const tlfRef = useRef();
  const itemPaisRef = useRef();
  const itemCategoriaRef = useRef();
  const itemCursoRef = useRef();
  const tipoPersonaRef = useRef();

  
  
  const handlerClick = () => {
    const contacto = [
      {
        id: uuidv4,
        tipo: tipoPersonaRef.current.value,
        nombre: nombreRef.current.value,
        email: emailRef.current.value,
        codigoArea: itemPaisRef.current.value,
        telefono: tlfRef.current.value,
        categoria:itemCategoriaRef.current.value,
        curso:itemCursoRef.current.value
      },
    ];
    console.log(JSON.stringify(contacto, null, 2));
    tipoPersonaRef.current.value = "";
    nombreRef.current.value = "";
    emailRef.current.value = "";
    itemPaisRef.current.value = "";
    tlfRef.current.value = "";
    itemCategoriaRef.current.value = "";
    itemCursoRef.current.value = "";

  };
  
  const [tipoPersona, setTipoPersona] = useState("")

  const handlerTipoPersona = function (e) {
    tipoPersonaRef.current.value = e.target.value;
    setTipoPersona(tipoPersonaRef.current.value);
  };

 

  
  return (

    
    <footer id="contacto">
      <div className="contenedor">
        <div className="reductor">
          <h1 className="titulo">
            Contáctanos
          </h1>
          <>
          <Formik

            initialValues={{
              nombre:"",
              email:"",
              area:"",
              phone:""
              
            }}

            validate={(valores) => {
              let errores = {}
              
              //VALIDACION PARA EL NOMBRE
              if(!valores.nombre){
                errores.nombre = "Debe ingresar un nombre";
              } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                errores.nombre = "El nombre solo puede contener letras y espacios"
              }
              
              //VALIDACION PARA EL CORREO
              if(!valores.email){
                errores.email = "Debe ingresar un correo electrónico";
              } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
                errores.email = "El correo debe contener al menos @ y punto para ser valido"
              }
              
              //VALIDACION PARA EL CODIGO DE PAIS
              if(!valores.area){
                errores.area = "Debe seleccionar un código de país";
              } 
              
              //VALIDACION PARA EL NUMERO DE TELEFONO
              if(!valores.phone){
                errores.phone = "Debe ingresar un numero telefonico";
              } else if(!/^[0-9]{10}$/.test(valores.phone)){
                errores.phone = "Debe ingresar un número de teléfono válido"
              }

              return errores;
            }}
            
            onSubmit={(valores, {resetForm}) => {
              resetForm();
              console.log("formulario enviado")
            }}
            >
            
            {( {values, errors, touched, handleSubmit, handleChange, handleBlur} ) => (

          <Form onSubmit={handleSubmit}>
            
          <Row>
              <RadioGroup name="tipoPersona" ref={tipoPersonaRef} >
          
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <RadioButton 
                    value="persona" 
                    className="etiqueta" 
                    checked={tipoPersona === "persona"} 
                    onClick={handlerTipoPersona} 
                    style={{color:"black"}}
                    
                    >Persona</RadioButton>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <RadioButton 
                    value="empresa" 
                    className="etiqueta" 
                    name="tipoPersona" 
                    checked={tipoPersona === "empresa"} 
                    onClick={handlerTipoPersona} 
                    style={{color:"black"}}
                   
                    >Empresa</RadioButton>
                  </div>
                </div>
              </RadioGroup>
            </Row>
            <br />
            <Form.Group className="mb-2" controlId="formGroupNombre" required="true" >
              <Form.Label for="validationCustom01" className="form-label" style={{ color: "#000000", fontSize:".8em"}} required id="validationCustom01">Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre completo"
                ref={nombreRef}
                style={{ width: "100%", height: "50px" }}
                name="nombre"
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.nombre && errors.nombre && <div className="error" style={{color:"red", fontWeight:"bold", fontSize:"small"}}>{errors.nombre}</div>}
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupEmail">
              <Form.Label className="etiqueta" style={{ color: "#000000", fontSize:".8em" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese email Ejemplo abc@xyz.xx"
                ref={emailRef}
                style={{ width: "100%", height: "50px" }}
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && <div className="error" style={{color:"red", fontWeight:"bold", fontSize:"small"}}>{errors.email}</div>}
            </Form.Group>
            <Row className="mb-2 resp-cont">
              <Form.Group as={Col} controlId="formGrroupCodigo" md={4}>
                <Form.Label
                  style={{
                    color: "#000000",
                    width: "250px !important",
                    display: "inline",
                    fontSize:".8em"
                  }}
                  className="etiqueta"
                >
                  Código de país
                </Form.Label >
                <Form.Select
                  aria-label="Default select example"
                  style={{
                    height: "50px",
                    position: "relative",
                    marginTop: "8px"
                  }}
                  ref={itemPaisRef} /*onChange={()=>handlerOnChange()}*/
                  name="area"
                  value={values.area}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">País</option>
                  <option value="+58" className="ven">
                    Venezuela
                  </option>
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
                {touched.area && errors.area && <div className="error" style={{color:"red", fontWeight:"bold", fontSize:"small"}}>{errors.area}</div>}
              </Form.Group>
              <Form.Group as={Col} controlId="formGroupTlf">
                <Form.Label className="etiqueta" style={{ color: "#000000" , fontSize:".8em"}}>Teléfono</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ingrese teléfono. Ejemplo 1234567"
                  ref={tlfRef}
                  style={{ width: "100%", height: "50px" }}
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {touched.phone && errors.phone && <div className="error" style={{color:"red", fontWeight:"bold", fontSize:"small"}}>{errors.phone}</div>}
              </Form.Group>
             
            </Row>
         
            <div className="btnContacto">
            <Button
              type="submit"
              variant="primary"
              style={{ background: "#2c303b" }}
              onClick={() => handlerClick()}
              >
              Enviar
            </Button>
          </div>
          </Form>
            )}
          </Formik>
          </>
        </div>
      </div>
    </footer>
  );
}

export default Contacto;
