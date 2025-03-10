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
        "service_ff4q4dw", // Your Service ID
        "template_2szwrw8", // Your Template ID
        form.current,
        "qnuTCd0q0Aa7UyIiC" // Your Public Key
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
      initial={{ opacity: 0, y: 590 }} // Strong animation
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      exit={{ opacity: 0, y: -50 }}
      className="p-8 bg-gray-100 h-screen rounded-xl shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Get in Touch</h2>
      <p className="text-center text-gray-600 mb-6">
        Have a question, project idea, or just want to say hello? Fill out the form below,
        and I’ll get back to you as soon as possible!
      </p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <motion.button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;