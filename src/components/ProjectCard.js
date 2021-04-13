import React from 'react';
import {AiFillGithub} from 'react-icons/ai';
import {CgWebsite} from 'react-icons/cg';
import webgif from '../images/webIcon.png'
import './ProjectCard.css';

function ProjectCard({image, title, description, gitlink, weblink}) {
    return (
        <div className="ProjectCard" style={{backgroundImage: `url(${image})`,backgroundRepeat: 'no-repeat', backgroundPosition: "center" ,backgroundSize: 'cover',}}>
           <div className="ProjectCard__overlay">
               <div className="ProjectCard__title">{title}</div>
               <p className="ProjectCard__description">
                   {description}
               </p>
              <div className="ProjectCard__logos">
                  <AiFillGithub className="ProjectCard__gitlogo" onClick={()=> window.open( gitlink, "_blank" )} size="40%"/>
                  <img className="ProjectCard__webIcon" src={webgif} alt=""/>
              </div>
                 
           </div>
        </div>
    );
}

export default ProjectCard;

// width: 50vw; height: 60vh;