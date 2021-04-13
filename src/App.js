import React, { useState, useEffect} from 'react';
import './App.css';
import Intro from './components/Intro';
import ReactLogo from './images/reactLogo.png';
import ReduxLogo from './images/reduxLogo.png';
import NodejsLogo from './images/nodejsLogo.png'
import Projects from './components/Projects';
import mdbLogo from './images/mdbLogo.png';
import firebLogo from './images/firebaseLogo.png';
import phpLogo from './images/phpLogo.png';
import vueLogo from './images/vueLogo.png';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="parallax">
      <img src={ReactLogo} className="app__reactLogo"
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <img src={ReduxLogo} className="app__reduxLogo"
      style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <img src={NodejsLogo} className="app__nodejsLogo"
      style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      />
      <img src={mdbLogo} className="app__mdbLogo"
      style={{ transform: `translateY(${offsetY * 0.5}px)`}}
      />
      <img src={firebLogo} className="app__firebLogo"
      style={{ transform: `translateY(${offsetY * 0.3}px)`}}
      />
      <img src={phpLogo} className="app__phpLogo"
      style={{ transform: `translateY(${offsetY * 0.4}px)`}}
      />
      <img src={vueLogo} className="app__vueLogo"
      style={{ transform: `translateY(${offsetY * 0.2}px)`}}
      />
      <div style={{display: "flex", flexDirection: "column", height: "100%"}}>
        <Intro style={{ transform: `translateY(${offsetY * 1}px)`}} />
        <Projects />
     </div>
    </section>
  );
}

export default App;
