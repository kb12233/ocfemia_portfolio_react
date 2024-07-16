import React from "react";
import ProjectCard from "./project_card";

function Projects() {
  return (
    <div id="projects" className="mt-72 mb-56">
      <section>
        {/* <!-- section title --> */}
        <div className='h-24'></div>
        <div className="flex flex-col items-center justify-center gap-2 mb-16">
          <p className="text-sm text-custom_gray2">Check Out My Recent</p>
          <h1 className="font-bold text-3xl">Projects</h1>
        </div>

        <div id="card-container" className="flex flex-wrap items-center justify-center gap-4">
          <ProjectCard 
            source="/ocfemia_portfolio_react/img/classy_code-sc.png"
            projectName="ClassyCode"
            description="A Flutter desktop app that generates code from class diagram images."
            link="https://github.com/kb12233/classy_code"
          />

          <ProjectCard 
            source="/ocfemia_portfolio_react/img/RentEase.png"
            projectName="RentEase"
            description="An AirBnB clone built with Flutter and Firebase."
            link="https://github.com/kb12233/rent_ease"
          />

          <ProjectCard 
            source="/ocfemia_portfolio_react/img/code_sc_lg.png"
            projectName="CODE Interpreter"
            description="Interpreter written in Java for a programming language we call CODE."
            link="https://github.com/kb12233/code-interpreter"
          />
        </div>
      </section>
    </div>
  );
}

export default Projects;