import React, {useState, useEffect} from 'react';
import { FaChevronCircleUp } from "react-icons/fa";

const UpScroll =() => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
    
  };
  
  window.addEventListener('scroll', toggleVisible);

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

      let progressBarHandler = () => {
          
          const totalScroll = document.documentElement.scrollTop;
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scroll = `${totalScroll / windowHeight}`;

          setScroll(scroll);
      }

      window.addEventListener("scroll", progressBarHandler);

      return () => window.removeEventListener("scroll", progressBarHandler);
  });


  return (
    <>
    <div id="progressBarContainer">
      <div id="progressBar" style={{transform: `scale(${scroll}, 1)`, opacity: `${scroll}`}} />
    </div>
    <div>
      <FaChevronCircleUp id="upScrollBtn" onClick={() => scrollToTop()} style={{fontSize:"52px", display: visible ? 'inline' : 'none'}}/>
    </div>
    </>
  )
}

export default UpScroll




