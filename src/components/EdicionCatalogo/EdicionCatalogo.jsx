import React, { useEffect, useState } from "react";
import MapeoCatalogo from "../EdicionCatalogo/MapeoCatalogo.jsx";
import store from "../../firebase/firebase.js";

function EdicionCatalogo() {
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

  return (
    <div className="cur-dip">
      <MapeoCatalogo mapaAreasObj={mapaAreasObj[0]} />
    </div>
  );
}

export default EdicionCatalogo;
