import React from "react";

function Contact() {
  return (
    <div className="" id="contact">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[38px] text-gray-900 font-bold">
          Let's Get In Touch!
        </h1>
        <span className="bg-orangeRed h-1 w-16 my-7"></span>
        <p className="max-w-[600px] w-full text-center text-gray-600 font-normal">
          Ready to start your next project with us? Send us a messages and we
          will get back to you as soon as possible!
        </p>
        <div className="my-7 max-w-[800px] w-full">
          <form className="flex flex-col space-y-5  w-full">
            <input type="text" className="form-input" placeholder="Full name" />
            <input
              type="text"
              className="form-input"
              placeholder="Email address"
            />
            <input
              type="text"
              className="form-input"
              placeholder="Phone number"
            />
            <textarea
              className="form-input"
              rows={10}
              placeholder="Message"></textarea>
            <button className="custom-btn bg-orangeRed font-bold text-white">
              submit
            </button>
          </form>
        </div>
        <p>+1 (555) 123-4567</p>
      </div>
    </div>
  );
}

export default Contact;
