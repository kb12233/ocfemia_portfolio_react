import React from "react";

function Contact() {
  return (
    <div id="contact" className="flex mb-40 items-center justify-center">
      {/* <!-- section title --> */}
      <section className=" ">
        <div className="flex flex-col items-center justify-center gap-2 mb-16">
          <p className="text-sm text-custom_gray2">Get in Touch</p>
          <h1 className="font-bold text-3xl">Contact Me</h1>
        </div>
        
        <div className="flex flex-wrap gap-2 items-center justify-center border-2 border-gray-400 rounded-full">
          {/* <!-- email --> */}
          <div className="flex items-center justify-center mt-4 ml-4 mb-4">
            <img src="/src/assets/img/email.png" className="h-10"/>
            <a href="mailto:kbocfemia@gmail.com">kbocfemia@gmail.com</a>
          </div>
          
          {/* <!-- linkedin --> */}
          <div className="flex items-center justify-center mt-4 mr-4 mb-4">
            <img src="/src/assets/img/linkedin copy.png" className="h-8"/>
            <a href="https://www.linkedin.com/in/karl-brandon-ocfemia/">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;