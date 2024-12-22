import React from 'react';

function Contact() {
  return (
    <div className="fixed w-[100vw] h-[100vh] flex flex-col md:flex-row gap-0 p-1 md:pr-8 bg-black">
      <div className="w-full md:w-[40%] h-[40%] md:h-[80%] my-auto rounded-lg">
        <img
          src="https://ik.imagekit.io/sheryians/three.js/three_8IbmQpggex.webp"
          alt="Contact illustration"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="bg-[#2C2C2C] w-full md:w-[60%] h-[72%] md:h-[80%] my-auto rounded-lg">
        <div className="w-full flex justify-between h-[10%] rounded-xl items-center p-5">
          <h1 className="text-xl font-bold text-white">Get In Touch</h1>
          <h1 className="text-2xl font-bold text-white ml-5">→</h1>
        </div>
        <h1 className="text-5xl font-bold text-white mt-5 ml-5">Let's get to it together</h1>
        <div>
          <form
            className="p-6"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field" // Adds a honeypot field for spam prevention
          >
            {/* Honeypot field for spam protection */}
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <h1 className="text-white mt-1 text-xl font-semibold">Your Good Name</h1>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-4 rounded-lg bg-black text-white outline-none mt-2"
              required
            />

            <h1 className="text-white mt-4 text-xl font-semibold">Your Email</h1>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-4 rounded-lg bg-black text-white outline-none mt-2"
              required
            />

            <h1 className="text-white mt-4 text-xl font-semibold">Message for Me</h1>
            <textarea
              name="message"
              placeholder="Drop a message for me"
              className="w-full px-4 py-4 rounded-lg bg-black text-white outline-none mt-2"
              required
            />

            <input
              type="submit"
              value="Connect ➤"
              className="text-2xl cursor-pointer font-bold w-full text-center bg-[#24CFA6] py-2 rounded-xl mt-4"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
