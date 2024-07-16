import React from "react";

function About() {
  return (
    <div id="about" className="w-full flex items-center justify-center mt-72 mb-44">
      <section className="container flex flex-col items-center justify-center gap-2 w-full">
        {/* <!-- section title --> */}
        <div className='h-20'></div>
        <div className="flex flex-col items-center justify-center gap-2 mb-16">
          <p className="text-sm text-custom_gray2">Get To Know More</p>
          <h1 className="font-bold text-3xl">About Me</h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 px-10 xl:px-32">
          {/* <!-- profile picture --> */}
          <img
              src="/ocfemia_portfolio_react/img/Ocfemia_dp2_bw.jpg"
              alt="Profile picture"
              className="h-44 sm:h-72 md:h-96 lg:h-96 rounded-2xl"
            />
          <div className="flex flex-col gap-2">
            <div className="flex flex-col md:flex-row gap-2 px-5">

              {/* <!-- Skills --> */}
              <div className="flex flex-1 flex-col items-center justify-start border-2 border-gray-400 rounded-lg">
                <img
                  src="/ocfemia_portfolio_react/img/experience.png"
                  alt="Experience icon"
                  className="h-8"
                />
                <p className="text-center text-base font-bold">Skills</p>
                <br/>
                <p className="text-center font-bold text-sm">Programming languages:</p>
                <p className="text-center text-sm">Java, C++, Python, Dart, SQL</p>
                <br/>
                <p className="text-center font-bold text-sm">Web Development:</p>
                <p className="text-center text-sm">JavaScript, React</p>
                <br/>
                <p className="text-center font-bold text-sm">Mobile App Development:</p>
                <p className="text-center text-sm">Android, Flutter</p>
              </div>

              {/* <!-- Education --> */}
              <div className="flex flex-1 flex-col items-center justify-start border-2 border-gray-400 rounded-lg">
                <img
                  src="/ocfemia_portfolio_react/img/education.png"
                  alt="Education icon"
                  className="h-8"
                />
                <p className="text-center text-base font-bold">Education</p>
                <br/>
                <p className="text-center font-bold text-sm">Cebu Institute of Technology - University</p>
                <p className="text-center text-sm">BS Computer Science</p>
                <p className="text-center text-sm">Expected Graduation: July 2025</p>
                <br/>
                <p className="text-center font-bold text-sm">University of the Philippines Visayas Tacloban College</p>
                <p className="text-center text-sm">BS Biology (Transferred after 3 years)</p>
              </div>
            </div>

            {/* <!-- Brief Info --> */}
            <div className="px-5">
              <p className="text-sm">
                Dedicated BS Computer Science student with a 
                diverse background in Biology, seeking 
                opportunities to apply technical skills and 
                leadership experience in a dynamic work 
                environment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;