import React, {useEffect, useState} from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import ReactCardCarousel from 'react-card-carousel';
import amazonImg from '../images/amazon-clone.jpg';
import rosterImg from '../images/RosterWebsite.jpg';
import whatsappImg from '../images/whatsappClone.jpg';
import netflixImg from '../images/netflix-project.jpg';
function Projects() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
     
    return (
        <div className="projects">
          <ReactCardCarousel disable_box_shadow="false">
            <ProjectCard image={amazonImg} 
            gitlink ="https://github.com/nischaltripathi/amazonClone"
            title="AMAZON CLONE" 
            description="It is a dummy website, where you signup/login, can add items to the your cart,
             go to the checkout page and confirm your order by entering
            test card details provided by stripe. You can check the source code and deployed website by clicking on the icons given below"/>
            <ProjectCard image={rosterImg}/>
            <ProjectCard image={whatsappImg}/>
            <ProjectCard image={netflixImg}/>
          </ReactCardCarousel>
        </div>
    );
}

export default Projects;
