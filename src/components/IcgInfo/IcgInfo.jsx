import React from "react";
import icgImage1 from "../../img/icg-image1.jpg";


function IcgInfo() {
 
 


  return (
    
    
       <div>

        <div className="flex_a icg_info">
            <div className="section1">
                <h3>ICG Consultores</h3>
                <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illum, molestiae tempore beatae neque sint adipisci impedit ab? Nobis natus hic iure, adipisci laudantium impedit nesciunt perspiciatis magni tenetur optio.
                Ipsum expedita, nemo quidem suscipit animi voluptates explicabo magnam mollitia dolores provident error officia enim? Autem quae alias necessitatibus distinctio, illo voluptates omnis vel sit quam unde natus animi enim!</article>
            </div>
            <div className="image1">
                <img src={icgImage1}  alt="icg-image1" />
            </div>
            
        </div>
         
         <div className="svg-wave" style={{ height: "150px", overflow: "hidden", background: "white"}}>
         <svg
           viewBox="0 0 500 150"
           preserveAspectRatio="none"
           style={{ height: "100%", width: "100%" }}
         >
           <path
             d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
             style={{ stroke: "none", fill: "#eeeaea" }}
           ></path>
         </svg>
       </div>
       </div>

        

    
  );
}

export default IcgInfo;
