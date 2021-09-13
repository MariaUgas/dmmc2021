import React, { useState, useEffect } from "react";
import { Noticia } from "../Noticia/Noticia.jsx";
import store from "../../firebase/firebase.js";
import Slider from "../Slider/Slider.jsx";

export const Container = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    store
      .collection("noticia")
      .orderBy("fecha", "desc")
      .limit(6)
      .onSnapshot((snap) => {
        const documents = [];
        snap.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
        });
        setNoticias(documents);
      });
  }, []);

  return <Slider noticias={noticias} />;
};

export default Container;
