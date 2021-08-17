import React from 'react'
import Form  from 'react-bootstrap/Form';
import { useRef } from 'react';

const options = [
  "Certificación en Gestión Integral de Crédito (5)",
  "Contabilidad (5)",
  "Desarrollo Personal-Laboral (6)",
  "Desarrollo Supervisorio-Gerencial (1)",
  "Diplomado (8)",
  "Finanzas (17)",
  "Gestión Integral del Talento Humano (5)",
  "Informática (4)",
  "Legal (5)",
  "Seguridad y Salud Laboral",
]




const Selectcurso = () => {
  const selectedRef = useRef();

  const handlerOnChange = () => {
    console.log("Seleccion ", selectedRef.current.value);
  }

  return (
    <div style={{width:'30%', padding: '0 20px'}}>
      <Form.Select aria-label="Floating label select example" ref={selectedRef} onChange={() => handlerOnChange()}>
        <option value="0">Seleccione un Curso</option>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </Form.Select>
    </div>

  )
}

export default Selectcurso
