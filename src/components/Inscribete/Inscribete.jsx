import React , {useState} from "react";
import Modal from 'react-bootstrap/Modal'
import Pago from "../../components/Pago/Pago.jsx"




function Inscribete(){

    const [show, setShow] = useState(false);

    return(
        <section className="info-last">
            <div className="contenedor last-section" id="inscribete-id">
                <div className="contenedor-textos-main">
                    <h2 className="titulo left">Elige lo mejor para tu futuro!</h2>
                    <p className="parrafo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa ullam aliquam perspiciatis, dolore quaerat odio laudantium adipisci laboriosam libero quis voluptas cupiditate exercitationem soluta distinctio magnam dignissimos. Aspernatur, veniam aperiam.</p>
                    <input type="submit" value="Inscribete" className="cta" onClick={() => setShow(true)}/>
                </div>
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                style={{maxWidth: "none"}}
                size="xl"
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Pago />
                </Modal.Body>
            </Modal>
            

            
            <div className="svg-wave" style={{height: "150px", overflow: "hidden"}}><svg viewBox="0 0 500 150"preserveAspectRatio="none" style={{height: "100%", width: "100%"}}><path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none", fill: "#f6f6f6"}}></path></svg>
        </div>
    </section>
    
    
        
    )
}

export default Inscribete;
   
    
        
