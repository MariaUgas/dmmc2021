import React, { useEffect, useState } from "react";
import ItemAcordeonArea from "../ItemAcordeonArea/ItemAcordeonArea.jsx";
import store from "../../firebase/firebase.js";

function CursoDiplo() {
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
    <div>
      <div className="cur-dip">
        <ItemAcordeonArea mapaAreasObj={mapaAreasObj[0]} />
      </div>
      <div className="pdfs" style={{textAlign:"center"}}>
        <a href="#" target="_blank" rel="noreferrer" >PDF´s informativos aqui</a>
      </div>
      <div>
        
        <div
          className="svg-wave"
          style={{ height: "150px", overflow: "hidden", background: "#eeeaea" }}
        >
          <svg
            viewBox="0 0 500 150"
            preserveAspectRatio="none"
            style={{ height: "100%", width: "100%" }}
          >
            <path
              d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
              style={{ stroke: "none", fill: "white" }}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CursoDiplo;
