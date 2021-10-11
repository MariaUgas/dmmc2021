import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { RadioButton, RadioGroup } from "@trendmicro/react-radio";
import Button from "react-bootstrap/Button";
import store from "../../firebase/firebase.js";

function Contacto() {
  const nombreRef = useRef();
  const emailRef = useRef();
  const tlfRef = useRef();
  const itemPaisRef = useRef();
  const itemCategoriaRef = useRef();
  const itemCursoRef = useRef();
  const tipoPersonaRef = useRef();

  /*const handlerOnChange=()=> {
    tlfRef.value = this.value;
    if((this.value).trim() !== '') {
      tlfRef.disabled = false;
    } else {
      tlfRef.disabled = true
    }
  }*/

  /*** Obtener Area */
  const [areasObj, setAreasObj] = useState([]);

  useEffect(() => {
    store.collection("areas").onSnapshot((snap) => {
      const documents = [];
      snap.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setAreasObj(documents);
    });
  }, []);

  const mapaAreasObj = areasObj.map((areaObj) => {
    return areaObj.areas;
  });

  /********  Curso **** */

  const [objetoCursos, setObjetoCursos] = useState([]);
  useEffect(() => {
    store.collection("cursos").onSnapshot((snap) => {
      const documents = [];
      snap.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() });
      });
      setObjetoCursos(documents);
    });
  }, []);

  const [identCurso, setIdentCurso] = useState("");

  const handlerCargarCursos = function (e) {
    itemCategoriaRef.current.value = e.target.value;
    setIdentCurso(itemCategoriaRef.current.value);
  };

  const mapeo = objetoCursos.map((cursos) => cursos);

  const filterByArea = mapeo.filter((curso) => {
    if (curso.idarea === itemCategoriaRef.current.value) {
      return true;
    }
  });

  const handlerClick = () => {
    const contacto = [
      {
        id: uuidv4,
        tipo: tipoPersonaRef.current.value,
        nombre: nombreRef.current.value,
        email: emailRef.current.value,
        codigoArea: itemPaisRef.current.value,
        telefono: tlfRef.current.value,
        categoria: itemCategoriaRef.current.value,
        curso: itemCursoRef.current.value,
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
          <Form>
          <Row>
              <RadioGroup name="tipoPersona" ref={tipoPersonaRef} >
              <h4>Datos del alumno</h4>
            <hr />
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <RadioButton value="persona" className="etiqueta" checked={tipoPersona === "persona"} onClick={handlerTipoPersona} style={{color:"black"}}>Persona</RadioButton>
                  </div>
                  <div className="col-xs-12 col-sm-6">
                    <RadioButton value="empresa" className="etiqueta" checked={tipoPersona === "empresa"} onClick={handlerTipoPersona} style={{color:"black"}}>Empresa</RadioButton>
                  </div>
                </div>
              </RadioGroup>
            </Row>
            <br />
            <Form.Group className="mb-2" controlId="formGroupNombre">
              <Form.Label className="etiqueta" style={{ color: "#000000", fontSize:".8em"}}>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre completo"
                ref={nombreRef}
                style={{ width: "100%", height: "50px" }}
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formGroupEmail">
              <Form.Label className="etiqueta" style={{ color: "#000000", fontSize:".8em" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese email Ejemplo abc@xyz.xx"
                ref={emailRef}
                style={{ width: "100%", height: "50px" }}
              />
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
                  Código de area
                </Form.Label >
                <Form.Select
                  aria-label="Default select example"
                  style={{
                    height: "50px",
                    position: "relative",
                    marginTop: "8px"
                  }}
                  ref={itemPaisRef} /*onChange={()=>handlerOnChange()}*/
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
              </Form.Group>
              <Form.Group as={Col} controlId="formGroupTlf">
                <Form.Label className="etiqueta" style={{ color: "#000000" , fontSize:".8em"}}>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese teléfono. Ejemplo 1234567"
                  ref={tlfRef}
                  style={{ width: "100%", height: "50px" }}
                />
              </Form.Group>
             
            </Row>
            <h4>Selección de curso</h4>
            <hr />
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGroupCursos">
                <Form.Label className="etiqueta" style={{ color: "#000000" , fontSize:".8em"}}>Categorias</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  ref={itemCategoriaRef}
                  style={{ width: "100%", height: "50px" }}
                  onClick={handlerCargarCursos}
                >
                  <option value={-1}>Seleccione una Categoria</option>
                  {mapaAreasObj[0] &&
                    mapaAreasObj[0].map((identCurso) => {
                      return (
                        <option value={identCurso.codigo}>
                          {identCurso.nombre}
                        </option>
                      );
                    })}
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGroupCursos">
                <Form.Label className="etiqueta" style={{ color: "#000000" , fontSize:".8em"}}>Cursos</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  ref={itemCursoRef}
                  style={{ width: "100%", height: "50px" }}
                >
                  <option value={-1}>Seleccione un Curso</option>
                  {filterByArea &&
                    filterByArea.map((a) => {
                      return <option value={a.idcurso}>{a.curso}</option>;
                    })}
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
          <div className="btnContacto">
            <Button
              variant="primary"
              style={{ background: "#2c303b" }}
              onClick={() => handlerClick()}
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contacto;
