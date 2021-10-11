import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useRef, useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { RadioButton, RadioGroup } from "@trendmicro/react-radio";
import store from "../../firebase/firebase.js";
import "@trendmicro/react-radio/dist/react-radio.css";

const Pago = () => {
  const tipoPersonaRef = useRef();
  const nombreRef = useRef();
  const emailRef = useRef();
  const itemPaisRef = useRef();
  const tlfRef = useRef();
  const itemBancoDestinoRef = useRef();
  const itemCategoriaRef = useRef();
  const itemCursoRef = useRef();
  const bancoOrigenRef = useRef();
  const monedaRef = useRef();
  const fechaPagoRef = useRef();
  const idDepositoRef = useRef();
  const montoRef = useRef();
  const tipoOperacionRef = useRef();

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

  console.log("areasObj =>", areasObj);

  const mapaAreasObj = areasObj.map((areaObj) => {
    return areaObj.areas;
  });

  console.log("mapaAreasObj =>", mapaAreasObj);
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
    itemCategoriaRef.current.value  = e.target.value;
    setIdentCurso(itemCategoriaRef.current.value)
    
  }

  const mapeo = objetoCursos.map((cursos) => cursos);

  const filterByArea = mapeo.filter((curso) => {
    if (curso.idarea === itemCategoriaRef.current.value) {
      return true;
    }
  });

  console.log(filterByArea);
  
  /*MMMMMMMMMMMMMMM INPUTS RADIO MMMMMMMMMM*/
  const [persona, setPersona] = useState("")
  
  const handlerTipoPersona = function (e) {
    tipoPersonaRef.current.value  = e.target.value;
    setPersona(tipoPersonaRef.current.value)
    
  }

  const [origen, setOrigen] = useState("")
  
  const handlerBancoOrigen = function (e) {
    bancoOrigenRef.current.value  = e.target.value;
    setOrigen(bancoOrigenRef.current.value)
    
  }

  const [moneda, setMoneda] = useState("")
  
  const handlerMoneda = function (e) {
    monedaRef.current.value  = e.target.value;
    setMoneda(monedaRef.current.value)
    
  }

  const [tipoOperacion, setTipoOperacion] = useState("")
  const [modoOperacion, setModoOperacion] = useState(false)
  
  useEffect(() => {
    tipoOperacion === "transferencia" ? setModoOperacion(true) : setModoOperacion(false);
    
  }, [tipoOperacion]);

    /*MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM*/
  const handlerClick = () => {
    const pago = [
      {
        id: uuidv4,
        persona: tipoPersonaRef.current.value,
        nombre: nombreRef.current.value,
        email: emailRef.current.value,
        codigoArea: itemPaisRef.current.value,
        telefono: tlfRef.current.value,
        categoria: itemCategoriaRef.current.value,
        curso: itemCursoRef.current.value,
        tipoOperacion: tipoOperacionRef.current.value,
        bancoOrigen: bancoOrigenRef.current.value,
        bancoDestino: itemBancoDestinoRef.current.value,
        fechaPago: fechaPagoRef.current.value,
        idDeposito: idDepositoRef.current.value,
        moneda: monedaRef.current.value,
        monto: montoRef.current.value,
      },
    ];
    console.log(JSON.stringify(pago, null, 2));

    tipoPersonaRef.current.value = "";
    nombreRef.current.value = "";
    emailRef.current.value = "";
    itemPaisRef.current.value = "";
    itemBancoDestinoRef.current.value = "";
    tlfRef.current.value = "";
    itemCategoriaRef.current.value = "";
    itemCursoRef.current.value = "";
    tipoOperacionRef.current.value = "";
    bancoOrigenRef.current.value ="";
    fechaPagoRef.current.value = "";
    idDepositoRef.current.value = "";
    monedaRef.current.value = "";
    montoRef.current.value = "";
  };
  
  

 

  
  return (
    <footer id="contacto">
      <div className="contenedor">
        <div className="reductor">
          <h1 className="titulo titulo-pago" id="contacto-id" style={{marginLeft:"130px"}}>
            Notificación de Pago
          </h1>
          <Form>
          <Form.Label className="etiqueta" style={{ color: "#000000" }}>
              Moneda de operación
            </Form.Label>
            <Row>
              <RadioGroup name="moneda" ref={monedaRef}>
                <div className="row">
                  <div className="col-xs-12 col-sm-3">
                    <RadioButton value="dolar" checked={moneda === "dolar"} onClick={handlerMoneda} style={{color:"black", fontSize:".8em"}}><strong>USD</strong></RadioButton>
                  </div>
                  <div className="col-xs-12 col-sm-3">
                    <RadioButton value="bolivar" checked={moneda === "bolivar"} onClick={handlerMoneda} style={{color:"black", fontSize:".8em"}}><strong>Bs.</strong></RadioButton>
                  </div>
                </div>
              </RadioGroup>
            </Row>
            <br />
            <h4>Datos del alumno</h4>
            <hr />
            <br />
          <Form.Label className="etiqueta" style={{ color: "black" }}>Persona</Form.Label>
          <Row>
              <RadioGroup name="bancoOrigen" ref={tipoPersonaRef} >
                <div className="row">
                  <div className="col-xs-12 col-sm-3">
                    <RadioButton value="natural" checked={persona === "natural"} onClick={handlerTipoPersona} style={{color:"black", fontSize:".8em"}}><strong>Natural</strong></RadioButton>
                  </div>
                  <div className="col-xs-12 col-sm-3">
                    <RadioButton value="juridica" checked={persona === "juridica"} onClick={handlerTipoPersona} style={{paddingLeft:"0px", color:"black", fontSize:".8em"}}><strong>Jurídica</strong></RadioButton>
                  </div>
                </div>
              </RadioGroup>
            </Row>
            <br/>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="etiqueta" style={{ color: "#000000" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese email Ejemplo abc@xyz.xx"
                ref={nombreRef}
                style={{ width: "100%", height: "50px" }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupNombre">
              <Form.Label className="etiqueta" style={{ color: "#000000" }}>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese nombre completo"
                ref={emailRef}
                style={{ width: "100%", height: "50px" }}
              />
            </Form.Group>
            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGrroupCodigo" md={4}>
                <Form.Label
                  style={{
                    color: "#000000",
                    width: "250px !important",
                    display: "inline",
                  }}
                  className="etiqueta"
                >
                  Código de area
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  style={{
                    height: "50px",
                    position: "relative",
                    marginTop: "8px",
                  }}
                  className="etiqueta"
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
                <Form.Label className="etiqueta" style={{ color: "#000000" }}>Teléfono</Form.Label>
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
                <Form.Label className="etiqueta" style={{ color: "#000000" }}>Categoría</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  placeholder="Seleccione una categoría"
                  ref={itemCategoriaRef}
                  style={{ width: "100%", height: "50px" }}
                  onClick={handlerCargarCursos}
                >
                  <option value={-1}>Seleccione una Categoria</option>
                  {mapaAreasObj[0] &&
                    mapaAreasObj[0].map((identCurso) => {
                      return <option value={identCurso.codigo}>{identCurso.nombre}</option>;
                    })}
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGroupCursos">
                <Form.Label className="etiqueta" style={{ color: "#000000" }}>Cursos</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  placeholder="Seleccione un curso"
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
            <br />
            <h4>Datos de Operacion</h4>
            <hr />
            
            <Form.Label className="etiqueta" style={{ color: "#000000" }}>
              Tipo de operación
            </Form.Label>
            <Row>
              <RadioGroup name="tipo" ref={tipoOperacionRef}>
                <div className="row">
                  <div className="col-xs-12 col-sm-4">
                    <RadioButton value="efectivo" checked={tipoOperacion === "efectivo"} onClick={()=>setTipoOperacion("efectivo")} style={{color:"black", fontSize:".8em"}}><strong>Efectivo (USD)</strong></RadioButton>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <RadioButton value="transferencia" checked={tipoOperacion === "transferencia"} onClick={()=>setTipoOperacion("transferencia")} style={{color:"black", fontSize:".8em"}}><strong>Transferencia</strong></RadioButton>
                  </div>
                  <div className="col-xs-12 col-sm-4">
                    <RadioButton value="pagoMovil" checked={tipoOperacion === "pagoMovil"} onClick={()=>setTipoOperacion("pagoMovil")} style={{color:"black", fontSize:".8em"}}><strong>Pago-movil</strong></RadioButton>
                  </div>
                </div>
              </RadioGroup>
            </Row>
            <br />
           
            {
              modoOperacion ?
              (
                <div>
                    <Form>
                    <Form.Label className="etiqueta" style={{ color: "#000000" }}>Banco origen</Form.Label>
                      <Row style={{marginBottom:"20px"}}>
                        <RadioGroup name="bancoOrigen" ref={bancoOrigenRef} >
                          <div className="row">
                            <div className="col-xs-12 col-sm-4">
                              <RadioButton value="mismo" checked={origen === "mismo"} onClick={handlerBancoOrigen} style={{color:"black", fontSize:".8em"}}><strong>Mismo banco</strong></RadioButton>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                              <RadioButton value="otro" checked={origen === "otro"} onClick={handlerBancoOrigen} style={{color:"black", fontSize:".8em"}}><strong>Otro banco</strong></RadioButton>
                            </div>
                          </div>
                        </RadioGroup>
                      </Row>
                      <Form.Group as={Col} controlId="formGroupBancos" className="groupBancos">
                        <Form.Label
                          style={{
                          color: "#000000",
                          width: "250px !important",
                          display: "inline",
                          }}
                          className="etiqueta">
                            Banco destino
                          </Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            style={{
                            height: "50px",
                            position: "relative",
                            marginTop: "8px",
                            marginBottom: "0px",
                          }}
                            ref={itemBancoDestinoRef}>
                              <option value="">Seleccione Banco destino</option>
                              <option value="Banesco">Banesco</option>
                              <option value="Banco Venezolano de Credito">Banco Venezolano de Crédito</option>
                              <option value="Banesco Panama">Banesco Panamá</option>
                            </Form.Select>
                      </Form.Group>
                     
                      <br />
                      <Form.Group className="mb-3" controlId="formGroupFecha">
                        <Form.Label className="etiqueta" style={{ color: "#000000" }}>Fecha</Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="Ingrese nombre completo"
                            ref={fechaPagoRef}
                            style={{ width: "100%", height: "50px" }}
                          />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formGroupDeposito">
                        <Form.Label className="etiqueta" style={{ color: "#000000" }}>
                          Numero de operacion
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese numero de operacion bancaria"
                          ref={idDepositoRef}
                          style={{ width: "100%", height: "50px", marginBottom: "0px" }}
                        />
                      </Form.Group>
           
                      <Form.Group className="mb-3" controlId="formGroupMonto">
                        <Form.Label className="etiqueta" style={{ color: "#000000" }}>Monto</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese monto de operacion"
                          ref={montoRef}
                          style={{ width: "100%", height: "50px" }}
                        />
                      </Form.Group>
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
                   
              )
              :
              (
               <div>

                    <Form>
                    <Form.Label style={{ color: "#000000", display:"none" }}>Banco origen</Form.Label>
                      <Row>
                        <RadioGroup name="bancoOrigen" ref={bancoOrigenRef} >
                          <div className="row">
                            <div className="col-xs-12 col-sm-6">
                              <RadioButton value="mismo" checked={origen === "mismo"} onClick={handlerBancoOrigen} style={{display:"none"}}>Mismo banco</RadioButton>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                              <RadioButton value="otro" checked={origen === "otro"} onClick={handlerBancoOrigen} style={{display:"none"}}>Otro banco</RadioButton>
                            </div>
                          </div>
                        </RadioGroup>
                      </Row>
                      <Form.Group as={Col} controlId="formGroupBancos" className="groupBancos" style={{display:"none"}}>
                        <Form.Label
                          style={{
                          color: "#000000",
                          width: "250px !important",
                          display: "inline",
                          }}
                          className="etiqueta">
                            Banco destino
                          </Form.Label>
                          <Form.Select
                            aria-label="Default select example"
                            style={{
                            height: "50px",
                            position: "relative",
                            marginTop: "8px",
                            marginBottom: "0px",
                          }}
                          className="etiqueta"
                            ref={itemBancoDestinoRef}>
                              <option value="">Seleccione Banco destino</option>
                              <option value="Banesco">Banesco</option>
                              <option value="Banco Venezolano de Credito">Banco Venezolano de Crédito</option>
                              <option value="Banesco Panama">Banesco Panamá</option>
                            </Form.Select>
                      </Form.Group>
                     
                    <br />
                    <Form.Group className="mb-3" controlId="formGroupFecha">
                      <Form.Label className="etiqueta" style={{ color: "#000000" }}>Fecha</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Ingrese nombre completo"
                          ref={fechaPagoRef}
                          style={{ width: "100%", height: "50px" }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupDeposito">
                      <Form.Label className="etiqueta" style={{ color: "#000000" }}>
                        Numero de operacion
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Opcion solo para Pago-movil"
                        ref={idDepositoRef}
                        style={{ width: "100%", height: "50px", marginBottom: "0px" }}
                      />
                    </Form.Group>
         
                    <Form.Group className="mb-3" controlId="formGroupMonto">
                      <Form.Label className="etiqueta" style={{ color: "#000000" }}>Monto</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Ingrese monto de operacion"
                        ref={montoRef}
                        style={{ width: "100%", height: "50px" }}
                      />
                    </Form.Group>
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
                 
              )
            }
          </Form>
        </div>
      </div>
    </footer>
  );
};

export default Pago;
