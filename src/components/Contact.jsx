import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_ff4q4dw", // My Service ID
        "template_2szwrw8", // My Template ID
        form.current,
        "qnuTCd0q0Aa7UyIiC" // My Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Your message has been sent successfully! I'll get back to you soon.");
          setLoading(false);
          navigate("/");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Oops! Something went wrong. Please try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 18 }}
      exit={{ opacity: 0, y: -40 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4"
    >
      <div className="backdrop-blur-md bg-white/70 shadow-xl rounded-2xl w-full max-w-lg p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Have a project or a question? Drop a message and I'll get back to you!
        </p>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          />
          <motion.button
            type="submit"
            className={`w-full py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md transition duration-300 hover:bg-blue-700 ${
              loading && "opacity-70 cursor-not-allowed"
            }`}
            whileHover={{ scale: loading ? 1 : 1.03 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
