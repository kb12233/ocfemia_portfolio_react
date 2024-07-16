import React from "react";

function ProjectCard(props) {
  return (
    <div className="border-2 border-gray-400 rounded-xl overflow-hidden w-80 sm:w-96">
      <img src={props.source} className="h-96 w-full object-cover"/>
      <div className="m-4">
        <span id="project-name" className="font-semibold">{props.projectName}</span>
        <span id="project-description" className="block">{props.description}</span>
        <div id="btn-container" className="flex justify-center mt-2">
          <button 
            className="font-semibold transition-all duration-300 ease-in-out py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base rounded-full border border-custom_gray bg-custom_gray text-white hover:bg-black" 
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