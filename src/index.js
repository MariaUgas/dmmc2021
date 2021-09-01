import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header/Header.jsx";
import Impulsa from "./components/Impulsa/Impulsa.jsx";
import Ofrecemos from "./components/Ofrecemos/Ofrecemos.jsx"
import Galeria from "./components/Galeria/Galeria.jsx"
import Inscribete from "./components/Inscribete/Inscribete.jsx"
import CrearNoticia from "./components/Noticia/CrearNoticia.jsx"
import Container from "./components/Container/Container.jsx"
import Contacto from "./components/Contacto/Contacto.jsx"
import CursoDiplo from "./components/CursoDiplo/CursoDiplo.jsx"
import Social from "./components/Social/Social.jsx"
import UpScroll from './components/UpScroll/UpScroll.jsx';
/*import EdicionCatalogo from "./components/EdicionCatalogo/EdicionCatalogo.jsx"*/
/*import EdicionCursos from "./components/EdicionCursos/EdicionCursos.jsx"*/
/*import ActzCatalogo from "./components/VerCatalogo/ActzCatalogo.jsx"*/
/*import ContainerArea from "./components/VerCatalogo/ContainerArea.jsx"*/
/*import TablaCursos from "./components/TablaCursos/TablaCursos.jsx"*/



import "./css/estilo.css";
import './css/bootstrap.min.css';
import "./firebase/firebase"




const divRoot = document.querySelector("#root");


ReactDOM.render([<UpScroll />,<Header />,<Impulsa />, <Ofrecemos />, <CursoDiplo/>, <Galeria />, <Container />, <Inscribete />, <Contacto />, <Social />, <CrearNoticia />], divRoot)