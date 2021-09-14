import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header.jsx";
import Impulsa from "./components/Impulsa/Impulsa.jsx";
import Ofrecemos from "./components/Ofrecemos/Ofrecemos.jsx";
/*import Galeria from "./components/Galeria/Galeria.jsx";*/
import Inscribete from "./components/Inscribete/Inscribete.jsx";
import Container from "./components/Noticia/Container.jsx";
import CursoDiplo from "./components/CursoDiplo/CursoDiplo.jsx";
import Social from "./components/Social/Social.jsx";
import UpScroll from "./components/UpScroll/UpScroll.jsx";

import "./css/estilo.css";
import "./css/bootstrap.min.css";
import "./firebase/firebase";

const divRoot = document.querySelector("#root");

ReactDOM.render(
  [
    <UpScroll />,
    <Header />,
    <Impulsa />,
    <Ofrecemos />,
    <CursoDiplo />,
    // <Galeria />,
    <Container />,
    <Inscribete />,
    <Social />
  ],
  divRoot
);
