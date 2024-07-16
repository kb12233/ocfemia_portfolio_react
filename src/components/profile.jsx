import React from "react";

function Profile() {
  // Function to open the resume PDF
  const openResume = () => {
    window.open('/ocfemia_portfolio_react/Ocfemia_Resume.pdf');
  };

  return (
    <div id="profile" className="w-full flex items-center justify-center mt-60 mb-44">
      <section className="container flex flex-col md:flex-row items-center justify-center gap-20 w-full">
        
        {/* <!-- profile picture --> */}
        <div>
          <img src="/ocfemia_portfolio_react/img/Ocfemia_dp.jpg" className="rounded-full h-48 sm:h-56 md:h-72" alt=""/>
        </div>
    
        {/* <!-- profile info --> */}
        <div className="flex flex-col items-center justify-center gap-y-3">
          {/* <!-- basic info --> */}
          <p className="font-bold text-custom_gray2 text-sm sm:text-base">Hello, I'm</p>
          <h1 className="font-bold text-2xl sm:text-3xl">Kb Ocfemia</h1>
          <p className="font-bold text-base sm:text-xl text-custom_gray2">Computer Science Student</p>
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            {/* <!-- download resume --> */}
            <button
              className="group flex items-center gap-2 font-semibold transition-all duration-300 ease-in-out py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base rounded-full border border-custom_gray hover:bg-custom_gray hover:text-white"
              onClick={openResume}
            >
              <img src="/ocfemia_portfolio_react/img/download_icon.png" className="h-4 group-hover:invert transition-all duration-300 ease-in-out" alt=""/>
              Resume
            </button>

            {/* <!-- contact info --> */}
            <button 
              className="font-semibold transition-all duration-300 ease-in-out py-1 px-2 sm:py-2 sm:px-4 text-sm sm:text-base rounded-full border border-gray-700 bg-custom_gray text-white hover:bg-black" 
              onClick={() => { window.location.href = '#contact'; }}>
              Contact Info
            </button>
          </div>

          {/* <!-- socials --> */}
          <div id="socials-container" className="flex gap-3">
            <img
              src="/ocfemia_portfolio_react/img/linkedin copy.png"
              alt="My LinkedIn profile"
              className="h-8 cursor-pointer"
              onClick={() => window.location.href = 'https://www.linkedin.com/in/karl-brandon-ocfemia/'}
            />
            <img
              src="/ocfemia_portfolio_react/img/github.png"
              alt="My Github profile"
              className="h-8 cursor-pointer"
              onClick={() => { window.location.href = 'https://github.com/kb12233'}}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;