import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header.jsx";
import Contactanos from "./components/Contactanos/Contactanos.jsx";
import Container from "./components/Noticia/Container.jsx";
import Social from "./components/Social/Social.jsx";
import UpScroll from "./components/UpScroll/UpScroll.jsx";
import Somos from "./components/Somos/Somos.jsx";
import IcgInfo from "./components/IcgInfo/IcgInfo.jsx";

import "./css/estilo.css";
import "./css/bootstrap.min.css";
import "./firebase/firebase";



const divRoot = document.querySelector("#root");

ReactDOM.render(
  [
    <UpScroll />,
    <Header />,
    <IcgInfo/>,
    <Somos/>,
    <Container />,
    <Contactanos />,
    <Social />
  ],
  divRoot
);
   
    
   


    
