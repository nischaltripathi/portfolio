import React, {useState, useEffect} from 'react';
import './Intro.css';



function Intro() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
      <div className="Intro">
        <div class="Intro__card">
            <h1 className="Intro__hello ">
              Wecome!
            </h1>
        </div>
        </div>
    
    )
}

export default Intro;
