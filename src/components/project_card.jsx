import React from "react";

function ProjectCard(props) {
  return (
    <div className="card">
      <img src={props.source} className="h-96 w-full object-cover"/>
      <div className="m-4">
        <span id="project-name" className="font-semibold">{props.projectName}</span>
        <span id="project-description" className="block">{props.description}</span>
        <div id="btn-container" className="flex justify-center mt-2">
          <button 
            className="card_button" 
            onClick={() => { window.location.href = props.link}}
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;